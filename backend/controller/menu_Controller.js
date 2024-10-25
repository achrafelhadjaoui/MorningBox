import Menu from "../models/menu.js"; // Adjust the import based on your project structure
import { StatusCodes } from "http-status-codes";
import { UnauthorizedError, NotFoundError, BadRequestError } from "../errors/index.js"; // Import your custom error classes

// Add Menu
const addMenu = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized");

    const { name, restaurant, meals } = req.body;

    // Validate input
    if (!name || !restaurant) {
      throw new BadRequestError("Name and restaurant are required");
    }

    // Create a new menu
    const newMenu = await Menu.create({
      name,
      restaurant,
      meals,
    });

    return res.status(StatusCodes.CREATED).json({
      message: "Menu created successfully",
      menu: newMenu,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// add Menue based on the last changes
import Menu from './models/menu.js'; // Adjust the import path as necessary
import { StatusCodes } from 'http-status-codes'; // Ensure you import your status codes
import { UnauthorizedError, BadRequestError } from './errors.js'; // Adjust the import path for your error handling

const addMenu = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized");

    const { name, restaurant, meals } = req.body;

    // Validate input
    if (!name || !restaurant || !meals || !Array.isArray(meals) || meals.length === 0) {
      throw new BadRequestError("Name, restaurant, and meals are required");
    }

    // Create a new menu
    const newMenu = await Menu.create({
      name,
      restaurant,
      meals, // meals should be an array of meal objects
    });

    return res.status(StatusCodes.CREATED).json({
      message: "Menu created successfully",
      menu: newMenu,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

export default addMenu;


// Update Menu
const updateMenu = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized");

    const { menuId } = req.params; // Get menuId from the request parameters
    const { name, restaurant, meals } = req.body;

    // Validate input
    if (!name && !restaurant && !meals) {
      throw new BadRequestError("At least one field must be provided for update");
    }

    // Find the menu to update
    const menu = await Menu.findById(menuId);
    if (!menu) throw new NotFoundError("Menu not found");

    // Update menu fields if provided
    if (name) menu.name = name;
    if (restaurant) menu.restaurant = restaurant;
    if (meals) menu.meals = meals;

    await menu.save(); // Save changes

    return res.status(StatusCodes.OK).json({
      message: "Menu updated successfully",
      menu,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Delete Menu
const deleteMenu = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized");

    const { menuId } = req.params; // Get menuId from the request parameters

    // Find and delete the menu
    const deletedMenu = await Menu.findByIdAndDelete(menuId);
    if (!deletedMenu) throw new NotFoundError("Menu not found");

    return res.status(StatusCodes.NO_CONTENT).json({ message: "Menu deleted successfully" });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Get All Menus
const getMenus = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized");

    // Fetch all menus from the database
    const menus = await Menu.find().populate("restaurant meals");

    return res.status(StatusCodes.OK).json({
      menus,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Get Menu by ID
const getMenuById = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) throw new UnauthorizedError("Not authorized");

    // Check if the user is an admin
    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized");

    const { menuId } = req.params; // Get menuId from the request parameters

    // Find the menu by ID
    const menu = await Menu.findById(menuId).populate("restaurant meals");
    if (!menu) throw new NotFoundError("Menu not found");

    return res.status(StatusCodes.OK).json({
      menu,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

export { addMenu, updateMenu, deleteMenu, getMenus, getMenuById };
