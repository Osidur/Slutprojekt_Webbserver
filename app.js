const express = require('express')
const bcrypt = require('bcryptjs')
const databaseModule = require('./databaseModule')
const UserRegisterModel = require('./UserRegisterModel')
const FileUploadModel = require('./FileUploadModel')
const app = express()
const port = 3000
const staticDir = __dirname + "\\static\\"

app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use(express.static(__dirname +"\\static\\"))

app.get('/', (req, res) => res.render('home.ejs'))
app.listen(port, () => console.log(`BokDiskus server listening on port ${port}!`))

app.get('/home', (req, res) => res.render("home.ejs"))

app.get('/forum', (req, res) => res.render("forum.ejs"))

app.get('/about', (req, res) => res.render("about.ejs"))

app.get('/login', (req, res) => res.render("login.ejs"))

app.post('/login', async function (req, res) {
  console.log("Log in info for user")
  console.log(req.body.username);
  console.log(req.body.userpassword);
  const user = await UserRegisterModel.getUser(req.body.username);
  await bcrypt.compare(req.body.userpassword, user.password, (err, success) => {
    if (err) {
      console.log(err)
    }
    if (success) console.log("success");
    else console.log("fail");
  })
  console.log(" ")
res.redirect('/');
})

app.get('/register', (req, res) => res.render("register.ejs"))

app.post('/register', async function (req, res) {
  console.log("Register info for new user")
    console.log(req.body.useremail);
    console.log(req.body.username);
    const hashedPassword = await bcrypt.hash(req.body.userpassword, 10)
    console.log(hashedPassword);
    console.log(" ")
    let user = UserRegisterModel.registerUser(req.body.username, req.body.useremail, hashedPassword)
    databaseModule.storeElement(user)
  res.redirect('/home');
})

//this code was an attempt at allowing users to upload files to the database.
/*app.get('/file', (req, res) => res.render("file.ejs"))

app.post('/file', function (req, res) {
  let file = FileUploadModel.fileUpload(req.body.userfileupload)
  databaseModule.storeElement(file)
  console.log("File upload to mongoose database")
})
*/

app.get('/praxel', (req, res) => res.render("praxel.ejs", {apa: ["burgare", "cheeseburgarge", "äppel"], images: ["albin.png", "gabbe.png", "obama.png", "stefan.png", "TomasHappy.png"]}))

