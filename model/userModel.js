const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user']
    }
})

userSchema.pre('save', async function (next) {

    let flag = this.isModified('password'); //false
    if (!flag) { // !false =true
        return next();
    }

    let salt = await bcrypt.genSalt(10);
    let hassedPassword = await bcrypt.hash(this.password, salt)
    this.password = hassedPassword;
    next();
})
userSchema.methods.comparePasswords = async function (enteredPassword) {
    let ans = await bcrypt.compare(enteredPassword, this.password);
    return ans;
}
const User = mongoose.model("Users", userSchema)


module.exports = User;