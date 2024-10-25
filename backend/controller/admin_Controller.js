import User from "../models/user.js"; // Adjust the import based on your project structure
import { StatusCodes } from "http-status-codes";
import {
  UnauthorizedError,
  NotFoundError,
  ConflictError,
  BadRequestError,
} from "../errors/index.js"; // Import your custom error classes

// Update User Role
const updateUser = async (req, res) => {
  try {
    // Check if the token is exist
    if (!req.user || !req.user._id)
      throw new UnauthorizedError("Not authorized");

    const userId = req.user._id;

    const user = await User.findById(userId);
    // Check if the user exists
    if (!user) throw new NotFoundError("User not found");

    // Check if the user is admin
    if (user.role !== "admin")
      throw new UnauthorizedError("Not authorized is not admin");

    // Find the user that the admin wants to update
    const { userIdToUpdate, role } = req.body; // Assuming userIdToUpdate and role are sent in the request body
    const userToUpdate = await User.findById(userIdToUpdate);
    if (!userToUpdate) throw new NotFoundError("User to update not found");

    // Update the user's role
    userToUpdate.role = role; // Update role
    await userToUpdate.save(); // Save changes

    return res.status(StatusCodes.OK).json({
      message: "User role updated successfully",
      user: {
        id: userToUpdate._id,
        name: userToUpdate.name,
        email: userToUpdate.email,
        role: userToUpdate.role,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Get All Users
const getUsers = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) {
      throw new UnauthorizedError("Not authorized");
    }

    // Get the requesting user's ID
    const adminId = req.user._id;

    // Find the admin user in the database
    const adminUser = await User.findById(adminId);
    if (!adminUser) {
      throw new UnauthorizedError("Not authorized");
    }

    // Check if the user is an admin
    if (adminUser.role !== "admin") {
      throw new UnauthorizedError("Not authorized");
    }

    // Fetch all users from the database
    const users = await User.find({}, "-password"); // Exclude password field from response

    return res.status(StatusCodes.OK).json({
      users,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Get User by ID
const getUserById = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) {
      throw new UnauthorizedError("Not authorized");
    }

    // Get the requesting user's ID
    const adminId = req.user._id;

    // Find the admin user in the database
    const adminUser = await User.findById(adminId);
    if (!adminUser) {
      throw new UnauthorizedError("Not authorized");
    }

    // Check if the user is an admin
    if (adminUser.role !== "admin") {
      throw new UnauthorizedError("Not authorized");
    }

    // Get the user ID from the request parameters
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId, "-password"); // Exclude password field from response
    if (!user) {
      throw new NotFoundError("User not found");
    }

    return res.status(StatusCodes.OK).json({
      user,
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    // Check if the user is authenticated and has a role
    if (!req.user || !req.user._id) {
      throw new UnauthorizedError("Not authorized");
    }

    // Get the requesting user's ID
    const adminId = req.user._id;

    // Find the admin user in the database
    const adminUser = await User.findById(adminId);
    if (!adminUser) {
      throw new UnauthorizedError("Not authorized");
    }

    // Check if the user is an admin
    if (adminUser.role !== "admin") {
      throw new UnauthorizedError("Not authorized");
    }

    // Get the user ID from the request parameters
    const { userId } = req.params;

    // Find and delete the user
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new NotFoundError("User not found");
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ message: "User deleted successfully" });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};



const filterUsers = async (req, res) => {
  try {
    if (!req.user) throw new UnauthorizedError("Not authorized");

    if (req.user.role !== "admin") throw new UnauthorizedError("Not authorized, not admin");

    const filters = {};
    
    // Dynamically build filters from query parameters
    if (req.query.role) filters.role = req.query.role;
    if (req.query.name) filters.name = { $regex: req.query.name, $options: 'i' }; // Case-insensitive search
    if (req.query.status) filters.status = req.query.status;

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
};


export { updateUser, getUsers, getUserById, deleteUser, filterUsers };
