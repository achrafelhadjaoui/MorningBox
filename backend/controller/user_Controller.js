import User from "../models/user.js"; // Adjust the import based on your project structure
import { StatusCodes } from "http-status-codes";
import {
  UnauthorizedError,

} from "../errors/index.js"; // Import your custom error classes


// Get User
const getUser = async (req, res) => {
    try {
      // Check if the user is authenticated and has a role
      if (!req.user || !req.user._id) {
        throw new UnauthorizedError("Not authorized");
      }
  
      const user = req.user;
  
      
  
      return res.status(StatusCodes.OK).json({
        user,
      });
    } catch (error) {
      const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
      return res.status(statusCode).json({ error: error.message });
    }
  };

  export default getUser;