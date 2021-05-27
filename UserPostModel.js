const mongoose = require("mongoose")

const userPostSchema = new mongoose.Schema({
    name: String,
    //password: String,
    text: String,
    date: String
})

const UserPost = mongoose.model("UserPost", userPostSchema)

exports.userPost = (inName, inPost, inDate) => {
    var userpost = new UserPost({
        name: inName,
        //password: inPassword,
        text: inPost,
        date: inDate
    })
    return userpost
}

exports.getUserPost = async function (userpost) {
    return await UserPost.findOne({text: userpost})
}

exports.getAllUserPosts = async function () {
    return await UserPost.find({})
}
