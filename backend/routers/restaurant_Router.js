import express from "express"
import {addRestaurant, updateRestaurant, getRestaurants, getRestaurantById} from "../controller/restaurant_Controller.js"
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post('/restaurant',verifyToken, addRestaurant);
router.get('/restaurant', verifyToken, getRestaurants);

export {router}