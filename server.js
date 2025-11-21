const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/database')
const app = express();
const User = require("./model/userModel")
const userRouter = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/v1/user", userRouter);

app.listen(8000, () => {
    connectDB();
    console.log("server started")
})

