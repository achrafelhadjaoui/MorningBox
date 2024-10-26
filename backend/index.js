import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import {router as authRouter} from "./routers/auth_Router.js"
import {router as restaurantRouter} from "./routers/restaurant_Router.js"
import {router as userRouter} from "./routers/user_Router.js"
import {router as adminRouter} from "./routers/Users_Router.js"


const app = express();
app.use(express.json());

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Adjust to your React app's URl
  }));

dotenv.config();

const port = process.env.PORT || 3000; // Logical OR for port
const mongoose_connect = process.env.MONGODB_CONNECTION_STRING;

const main = async () => {
    try {
        await mongoose.connect(mongoose_connect);
        console.log("Successfully connected to MongoDB");

        // Start the server after successful DB connection
        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (error) {
        console.error({ "error": error });
    }
};

main();

app.use('/', authRouter);
app.use('/', restaurantRouter);
app.use('/', userRouter);
app.use('/', adminRouter);
