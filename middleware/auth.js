const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
const generateToken = (payload) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    return token
}

const protect = async (req, res, next) => {
    console.log("=====protect middleware=====")

    // token exists or not
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(" ")[1] // ["Bearer"," dhfkdasfbakjsdbfadsf"]
    }

    // if token exists then proceed
    if (!token) {
        return res.json({
            success: false,
            message: "token not found!"
        })
    }

    // token -> _id -> user information 
    try {
        let payload = jwt.verify(token, process.env.JWT_SECRET);
        if (!payload) {
            res.json({
                success: false,
                message: "token is invlaid"
            })
        }


        let user = await User.findById(payload._id);
        if (!user) {
            res.json({
                success: false,
                message: "user not found"
            })
        }
        req.user = user;
        next();
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }


}
module.exports = { generateToken, protect };