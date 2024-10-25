import express from "express"
import getUser from "../controller/user_Controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get('/user', verifyToken, getUser);

export {router}