const mongoose = require("mongoose")

const fileUploadSchema = new mongoose.Schema({
    filename: String
})

const File = mongoose.model("File", fileUploadSchema)

exports.fileUpload = (inFile) => {
    var file = new File({
        filename: inFile,
    })
    return file
}

exports.getFile = async function (uFile) {
    return await File.findOne({filename: uFile})
}