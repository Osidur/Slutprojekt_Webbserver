const express = require('express')
const bcrypt = require('bcryptjs')
const databaseModule = require('./databaseModule')
const UserRegisterModel = require('./UserRegisterModel')
const UserPostModel = require('./UserPostModel')
//const FileUploadModel = require('./FileUploadModel')
const app = express()
const port = 3000
const staticDir = __dirname + "\\static\\"

app.use(express.json())
app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use(express.static(__dirname + "\\static\\"))

app.get('/', (req, res) => res.render('home.ejs'))
app.listen(port, () => console.log(`BokDiskus server listening on port ${port}!`))

app.get('/home', (req, res) => res.render("home.ejs"))

app.get('/forum', (req, res) => res.render("forum.ejs"))

app.post('/forum', async function (req, res) {
  //weird code maybe delete later i dunno just a copy of /login tho
  console.log("Log in info for user that is gunna post straight facts")
  console.log(req.body.username);
  console.log(req.body.userpassword);
  let user = await UserRegisterModel.getUser(req.body.username);

  await bcrypt.compare(req.body.userpassword, user.password, (err, success) => {
    if (err) {
      console.log(err)
    }
    if (success) {
      console.log(`This is the forum post from the user ${user.name}:`)
      //"do something that makes the website know what user is logged in" lol i dont need to do that anymore
      console.log(req.body.forumpost)
      let userpost = UserPostModel.userPost(req.body.username, req.body.forumpost)
      databaseModule.storeElement(userpost)
      res.render("forum.ejs");
    } else console.log("The password doesn't match. The userpost is cancelled.");
  })
  console.log(" ")
  res.redirect('/');
  //homos humongus code ^
})

app.get('/about', (req, res) => res.render("about.ejs"))

app.get('/register', (req, res) => res.render("register.ejs", {
  answer: ["Register"]
}))

app.post('/register', async function (req, res) {
  //the code on some line lost to time is from https://medium.com/swlh/basic-login-system-with-node-js-99acf02275b9
  //define users in databaseModule.js or use getUser perhaps
  //this might be fixed thanks to niklas who said: "uuhhh this bad, fix the bad"
  var compareuser = UserRegisterModel.getUser();
  //let foundUser = req.body.email === UserRegisterModel.getUser.email;
  let foundUser = UserRegisterModel.getUser(req.body.username);
  if (foundUser) {
    res.render("register.ejs", {
      answer: ["Username already exists"]
    })
  } else {
    console.log("Register info for new user")
    console.log(req.body.useremail);
    console.log(req.body.username);
    const hashedPassword = await bcrypt.hash(req.body.userpassword, 10)
    console.log(hashedPassword);
    console.log(" ")
    let user = UserRegisterModel.registerUser(req.body.username, req.body.useremail, hashedPassword)
    databaseModule.storeElement(user)
    res.redirect('/home');
  }
})

app.get('/login', (req, res) => res.render("login.ejs"))

app.post('/login', async function (req, res) {
  console.log("Log in info for user")
  console.log(req.body.username);
  console.log(req.body.userpassword);
  let user = await UserRegisterModel.getUser(req.body.username);

  await bcrypt.compare(req.body.userpassword, user.password, (err, success) => {
    if (err) {
      console.log(err)
    }
    if (success) {
      console.log(`The user: "${user.name}" is logged in`)
      //"do something that makes the website know what user is logged in" is old news
      //now you will "sign" your post at the same time as when posting to the forum
      //therefore u wont need to log in
      //still success tho
    } else console.log("fail");
  })
  console.log(" ")
  res.redirect('/');
})

//this code was an attempt at allowing users to upload files to the database.
/*app.get('/file', (req, res) => res.render("file.ejs"))

app.post('/file', function (req, res) {
  let file = FileUploadModel.fileUpload(req.body.userfileupload)
  databaseModule.storeElement(file)
  console.log("File upload to mongoose database")
})
*/

app.get('/praxel', (req, res) => res.render("praxel.ejs", {
  apa: ["burgare", "cheeseburgarge", "äppel"],
  images: ["SimonSad.png", "albin.png", "gabbe.png", "obama.png", "stefan.png", "TomasHappy.png"]
}))