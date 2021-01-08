const {Sequelize }=require('sequelize');
const sequelize = new Sequelize('car','root','root@123',{
    host:'localhost',
    dialect:'mysql',
    port:'8081',
    username:'root',
    password:'root@123',
    
})
sequelize.sync({
    logging: console.log,                  // Default, displays the first parameter of the log function call
    force:true
}).then(()=>{
    console.log('succesfull connected')
}).catch((err)=>{
    console.log('unable to conect',err)
})
module.exports={sequelize}