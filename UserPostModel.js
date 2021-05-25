const mongoose = require("mongoose")

const userPostSchema = new mongoose.Schema({
    name: String,
    //password: String,
    text: String
})

const UserPost = mongoose.model("UserPost", userPostSchema)

exports.userPost = (inName, inPost) => {
    var userpost = new UserPost({
        name: inName,
        //password: inPassword,
        text: inPost
    })
    return userpost
}

exports.getUserPost = async function (userpost) {
    return await User.findOne({text: userpost})
}