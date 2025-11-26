const jwt = require('jsonwebtoken');
const generateToken = (payload) => {
    let token = jwt.sign(payload, process.env.JWT_SECRET);
    return token
}

const protect = (req, res, next) => {
    console.log("=====protect middleware=====")
}
module.exports = { generateToken, protect };