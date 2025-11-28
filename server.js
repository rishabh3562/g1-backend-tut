const express = require('express');
const connectDB = require('./config/database')
require('dotenv').config();
const app = express();
const userRouter = require("./routes/userRoutes");
const authRouter = require('./routes/authRoutes');
const { authorize, protect } = require('./middleware/auth');

app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter)
app.get('/admin', protect, authorize('admin'), (req, res) => {
    res.send({
        success: true,
        message: "addmin only route"
    })
})
app.listen(8000, () => {
    connectDB();
    console.log("server started")
})

