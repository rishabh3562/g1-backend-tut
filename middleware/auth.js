const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    return token
}

const protect = (req, res, next) => {
    console.log("=====protect middleware=====")

    // token exists or not
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.header.authorization.split(" ")[1] // ["Bearer"," dhfkdasfbakjsdbfadsf"]
    }

    // if token exists then proceed
    if (!token) {
        return res.json({
            success: false,
            message: "token not found!"
        })
    }

    // token -> _id -> user information 

    // req.user =user(token);
    next();
}
module.exports = { generateToken, protect };