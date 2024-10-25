import Restaurant from "../models/restaurant.js"; // Adjust the import based on your project structure
import { StatusCodes } from "http-status-codes";
import {
  UnauthorizedError,
  NotFoundError,
  BadRequestError,
} from "../errors/index.js"; // Import your custom error classes

// Add Restaurant
const addRestaurant = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user) throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin")
      throw new UnauthorizedError("Not authorized is an admin");

    const { name, address} = req.body;

    // Validate input
    if (!name || !address) {
      throw new BadRequestError("Name and address are required");
    }

    // Create a new restaurant
    const newRestaurant = await Restaurant.create({
      name,
      address,
    });

    return res.status(StatusCodes.CREATED).json({
      message: "Restaurant created successfully",
      restaurant: newRestaurant,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Update Restaurant
const updateRestaurant = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id)
      throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin")
      throw new UnauthorizedError("Not authorized");

    const { restaurantId } = req.params; // Get restaurantId from the request parameters
    const { name, address, gerant, menu } = req.body;

    // Validate input
    if (!name && !address && !gerant && !menu) {
      throw new BadRequestError(
        "At least one field must be provided for update"
      );
    }

    // Find the restaurant to update
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) throw new NotFoundError("Restaurant not found");

    // Update restaurant fields if provided
    if (name) restaurant.name = name;
    if (address) restaurant.address = address;
    if (gerant) restaurant.gerant = gerant;
    if (menu) restaurant.menu = menu;

    await restaurant.save(); // Save changes

    return res.status(StatusCodes.OK).json({
      message: "Restaurant updated successfully",
      restaurant,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Delete Restaurant
const deleteRestaurant = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id)
      throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin")
      throw new UnauthorizedError("Not authorized");

    const { restaurantId } = req.params; // Get restaurantId from the request parameters

    // Find and delete the restaurant
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    if (!deletedRestaurant) throw new NotFoundError("Restaurant not found");

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ message: "Restaurant deleted successfully" });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Get All Restaurants
const getRestaurants = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user)
      throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin")
      throw new UnauthorizedError("Not authorized");

    // Fetch all restaurants from the database
    const restaurants = await Restaurant.find();

    return res.status(StatusCodes.OK).json({
      restaurants,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Get Restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id)
      throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin")
      throw new UnauthorizedError("Not authorized");

    const { restaurantId } = req.params; // Get restaurantId from the request parameters

    // Find the restaurant by ID
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) throw new NotFoundError("Restaurant not found");

    return res.status(StatusCodes.OK).json({
      restaurant,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};


const filterRestaurnt = async (req, res) => {
  try {
    if (!req.user) throw new UnauthorizedError("Not authorized");

    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized, not admin");

    const filters = {};
    
    // Dynamically build filters from query parameters
    if (req.query.name) filters.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive search
    if (req.query.address) filters.address = { $regex: req.query.address, $options: 'i' }; // Case-insensitive search
    if (req.query.gerant) filters.gerant ={ $regex: req.query.gerant, $options: 'i' };
    // Fetch users based on filters
    const users = await User.find(filters);
    
    if (!users.length) throw new NotFoundError("No users found");

    return res.status(StatusCodes.OK).json({
      success: true,
      data: users,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
}


const filterRestaurant = async (req, res) => {
  try {
    // Ensure the user is authenticated
    if (!req.user) throw new UnauthorizedError("Not authorized");

    // Ensure the user has the admin role
    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized, not admin");

    const filters = {};
    
    // Dynamically build filters from query parameters
    if (req.query.name) filters.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive search
    if (req.query.address) filters.address = { $regex: req.query.address, $options: 'i' }; // Case-insensitive search
    if (req.query.gerant) filters.gerant = { $regex: req.query.gerant, $options: 'i' }; // Case-insensitive search
    
    // Fetch restaurants based on filters, and populate their references (like 'gerant')
    const restaurants = await Restaurant.find(filters).populate('gerant'); // Include the 'gerant' reference

    // If no restaurants are found, throw an error
    if (!restaurants.length) throw new NotFoundError("No restaurants found");

    // Return the results
    return res.status(StatusCodes.OK).json({
      success: true,
      data: restaurants,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};


export {
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getRestaurants,
  getRestaurantById,
  filterRestaurnt
};
