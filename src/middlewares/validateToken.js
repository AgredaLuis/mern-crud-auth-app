import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

/* req me da informacion de la peticion, response me da metodos para evnaior una respuesta y next significa que en vez de retortar , le decimos next que continua con la siguiente funcion  */
export const authRequired = (req, res, next) => {
  
  const {token} = req.cookies

  if(!token) return res.status(301).json({message: "No token, authorization"})
  
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({message: "Invalid token"})

    /* guardo el user en req.user para que todos los req tengan el usuario */
    req.user = user
    next();
  })
};
