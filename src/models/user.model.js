import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,  // Cambiado de "require" a "required"
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {  // Llave de apertura correcta para las opciones del esquema
  timestamps: true,
});

export default mongoose.model("User", userSchema);
