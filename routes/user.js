const {Router} = require('express')
const route = Router()
const User = require('../controller')

// route.get('/', (req, res) =>{
//     console.log(req.query);
//     const title = "Express"
//     res.render('index', {User})
// })
route.get('/', User.users)

module.exports = route