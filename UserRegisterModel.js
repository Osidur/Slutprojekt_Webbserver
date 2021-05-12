const mongoos = require("mongoose")

const userRegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userRegisterSchema)

exports.registerUser = function (inName, inMail, inPassword) {
    var user = User({
        name: inName,
        email: inMail,
        password: inPassword
    })
    user.save()
}

exports.getUser = async function (uName) {
    return await User.findOne({username: Uname})
}