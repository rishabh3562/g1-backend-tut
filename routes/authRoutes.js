const express = require('express');
const { loginHandler, registerHandler, logoutHandler, meHandler } = require('../controllers/authController');

const authRouter = express.Router();

authRouter.route("/register").post(registerHandler);
authRouter.route("/login").post(loginHandler);
authRouter.route("/logout").post(logoutHandler);
authRouter.route("/me").post(meHandler);

module.exports = authRouter;