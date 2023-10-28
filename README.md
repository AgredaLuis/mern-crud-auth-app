# mern-crud-auth-app

## _MERN stack CRUD con Autenticacion con JWT_

Este proyecto MERN Stack está diseñado para implementar un sistema de CRUD (Create, Read, Update, Delete) utilizando JSON Web Tokens (JWT) para la autenticación de usuarios. Con esta aplicación, puedes gestionar datos de forma segura y eficiente, asegurándote de que solo los usuarios autorizados puedan acceder y modificar la información.

### Installation

```sh
git clone https://github.com/AgredaLuis/mern-crud-auth-app/
cd mern-tasks-auth
npm i
npm run build
npm start
```

>Necesitas tener una base de datos Mongodb ejecutándose

## Features
Registro y Autenticación de Usuarios: Permite a los usuarios registrarse y autenticarse utilizando JWT para proteger las rutas y recursos.

Operaciones CRUD: Implementa las operaciones básicas de Crear, Leer, Actualizar y Borrar registros, lo que te permite administrar tus datos de manera efectiva.

### Backend 

- /src/*
routes: se crean las URLs de backend que el front puede visitar

controllers: se crear funciones que se ejecutan cuando visitecuando visiten una URL

models: Modelos de datos para la bdd en Mongo 

middlewares: Almacenas Rutas protegidas por autenticación

libs: funciones reutilizables (ejemplo: generacion de token)

Schemas: para validaciones con bibliotecas con ZOD, para validas datos que llegan al backend

### Modulos utilizados
- nodemon
- moongoose
- bcrrypt
- jsonwebtoken
- cookie-parsaer
- ZOD
- cors

### Frontend

- client/src/*

pages: para almacenar rutas principales

components: componentes que son secciones dentro de una pagina

context : para manejar estados globales

api: dodne se hacen peticiones a las rutas del backend

### Modulos utilizados
- axios
- react-hook-form
- react-router-dom
- tailwind.css
- js-cookie
- dayjs
