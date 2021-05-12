const mongoose = require("mongoose")

const userRegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userRegisterSchema)

exports.registerUser = (inName, inMail, inPassword) => {
    var user = new User({
        name: inName,
        email: inMail,
        password: inPassword
    })
    return user
}

exports.getUser = async function (uName) {
    return await User.findOne({username: Uname})
}