import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// init express:
const app = express();

// Dotenv:
dotenv.config();

// mongoDB connection:
mongoose.connect('mongodb://127.0.0.1:27017/Product', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log(err)
        console.log("no connection start");
    });


// exprees use:
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// body-parser use:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// cors use:
app.use(cors());

//Routes:
import productRoutes from "../server/src/routes/products.js";
import cartRoutes from "../server/src/routes/cart.js";
import orderRoutes from "../server/src/routes/order.js";
app.use("/", productRoutes);
app.use("/", cartRoutes);
app.use("/", orderRoutes);


app.listen(3001, () => {
    console.log("Server started on port 3001");
}
);
