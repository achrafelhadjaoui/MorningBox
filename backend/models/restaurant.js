import mongoose from "mongoose"

const restaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    // Reference to the Gerant
    gerant: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Assigned by admin
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: false }, // Each restaurant has one menu
  }, { timestamps: true });
  
  export default mongoose.model('Restaurant', restaurantSchema);