import express from "express"
import { verifyToken } from "../middlewares/verifyToken.js";
import { getUsers, updateUser } from "../controller/admin_Controller.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.put('/users/:id', verifyToken, getUsers);


export {router}