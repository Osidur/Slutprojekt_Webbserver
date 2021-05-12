const express = require('express')
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

app.post('/login', function (req, res) {
    console.log(req.body.useremail);
    console.log(req.body.username);
    console.log(req.body.userpassword);
  res.redirect('/');
})

app.get('/praxel', (req, res) => res.render("praxel.ejs", {apa: ["burgare", "cheeseburgarge", "äppel"]}))
