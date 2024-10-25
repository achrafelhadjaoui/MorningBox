import mongoose from 'mongoose';

// Define the schema for embedded meals within the menu
const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, enum: ['available', 'unavailable'], default: 'available' }, // Enum to track availability status
  prix: { type: Number, required: true }, // Price of the meal
});

// Define the schema for the menu
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Reference to the restaurant it belongs to
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  // List of meals in this menu, using the embedded relation (array of meal subdocuments)
  meals: [mealSchema], 
}, { timestamps: true });

export default mongoose.model('Menu', menuSchema);
