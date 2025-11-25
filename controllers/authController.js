const User = require("../model/userModel");

const loginHandler = async (req, res) => {
    const { email, password } = req.body;

    //if email and password are not blank
    if (!email || !password) {
        return res.json({
            success: false,
            message: "missing fields"
        })
    }

    //user exists or not 
    let user = await User.findOne({
        email
    })
    if (!user) {
        return res.json({
            success: false,
            message: "user does not exists"
        })
    }
}
const registerHandler = async (req, res) => {
    try {
        // 1
        const { name, age, email, password, role } = req.body;
        // 3
        const data = new User({
            name: name,
            age: age,
            email: email,
            password: password,
            role: role,
        })
        const savedUser = await data.save();
        // 4
        res.json({
            success: true,
            data: savedUser
        })
    } catch (err) {
        res.json({
            success: false,
            error: err.message
        })
    }
}
const logoutHandler = (req, res) => {
}
const meHandler = (req, res) => {

}
module.exports = {
    loginHandler,
    logoutHandler,
    registerHandler,
    meHandler
}