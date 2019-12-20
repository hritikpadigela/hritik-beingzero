const express = require('express') //importing
const app = express() //creating an object of express
const port = process.env.PORT || 3000 //creating the port number

app.use(express.static('frontend'))   //This line tells express to serve js or css files from frontend folder

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))      //__dirname--Current Directory Address  __filename--Current File name
app.get('/login', (req, res) => res.send('LOGIN'))      //They are called as Routes. So we have 3 routes
app.get('/register', (req, res) => res.send('REGISTER'))
app.get('/data', (req, res) => res.json(student))

var student = {name: "Supraja", college: "VNR VJIET", regno: "17071A1242"}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))