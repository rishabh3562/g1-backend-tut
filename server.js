const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/database')
const app = express();
const userRouter = require("./routes/userRoutes");
const authRouter = require('./routes/authRoutes');

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auht",authRouter)

app.listen(8000, () => {
    connectDB();
    console.log("server started")
})

