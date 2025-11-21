const express = require('express');

const authRouter = express.Router();

authRouter.route("/login").post();
authRouter.route("/register").post();
authRouter.route("/logout").post();
authRouter.route("/me").post();

module.exports = authRouter;