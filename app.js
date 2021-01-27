const express = require('express')
const app = express()
 require('./dbconnect')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const user = require('./routes/user')
app.use('/user', user)
app.set('view engine', 'ejs')
app.use(express.json());
app.use('/', (req, res) => {
    res.status(200).send('welcome to user profile')
})
module.exports = app