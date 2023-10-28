import mongoose from 'mongoose'

export const connectDB = async () => {
try {
  mongoose.connect('mongodb+srv://usoparatodo98:QaNKLNSpd4kTIr5v@cluster0.zu5xom4.mongodb.net/?retryWrites=true&w=majority')
  console.log("DB is connected")
} catch (error) {
  console.log(error)
}
}




/* QaNKLNSpd4kTIr5v */