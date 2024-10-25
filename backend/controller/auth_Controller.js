import User from "../models/user.js";
import  {StatusCodes}  from "http-status-codes";
import {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  ConflictError,
} from "../errors/index.js";
import bcrypt from "bcrypt";
import genrate_Token from "../utils/jwt.js"

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all the data are entered
    if (!name || !email || !password) {
      throw new BadRequestError("Fill all the form");
    }

    // Check if the user already exists
    const isExist = await User.findOne({ email });
    if (isExist) {
      throw new ConflictError("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user directly
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Respond with the created user data
    return res.status(StatusCodes.CREATED).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if all data was entered
    if (!email || !password) {
      throw new BadRequestError("Please enter all required fields");
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      throw new NotFoundError("User not found");
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError("Invalid credentials");
    }

    // generated token
    const token = genrate_Token( user );

    // Respond with user data
    return res.status(StatusCodes.OK).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      // the token
      token: token,
    });
  } catch (error) {
    console.error(error)
    const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({ error: error.message });
  }
};

export { Register, Login };
