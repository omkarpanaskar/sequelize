const user=require('./models/user')
const data=require('./data').data;
const {Model}=require('sequelize')
const express=require('express');
const bodyParser=require('body-parser')
const app=express.Router();
class User extends Model {}
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb', parameterLimit: 1000000 }));

app.post('',(req,res)=>{
return  User.bulkBuild(data).then((data)=>{
    if(data)
    res.send(data)
    else{
        res.status(400).send('error in inserting row')
    }
})
})

module.exports=app