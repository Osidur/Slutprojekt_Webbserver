const mongoos = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userSchema)

exports.saveUser = function (inName, inMail, inPassword) {
    var user = User({
        name: inName,
        email: inMail,
        password: inPassword
    })
    user.save()
}

exports.getUser = async function (uName) {
    return await NamnLista.find({})
}