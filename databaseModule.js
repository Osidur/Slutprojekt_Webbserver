const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/BokDiskus',{useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error: "))
db.once('open', function() {
    //connected
    console.log("connected to mongoose database")
})



exports.storeElement = async (element) => {
    await element.save(()=>{
        console.log("successfully saved element in mongoose database")
    })
}