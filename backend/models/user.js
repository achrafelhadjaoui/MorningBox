import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'gerant', 'admin'], default: 'user' }, // Default role is 'user'
  status: {type: String, enum: ['assigned', 'free'], default: 'free'}
}, { timestamps: true });

export default mongoose.model('User', userSchema);
