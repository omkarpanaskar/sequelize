const { User, sequelize } = require('../../models')
const UserData = require('../../config/UserData').data;
const { Op } = require("sequelize");
const search = async () => {
    try {
        console.log("repo");
        let result = null;
        // const dbQuery = {
        //     where:{ 
        //     attributes: ['fname', 'email', 'phoneNo']},
        //     include: [
        //         {
        //             model: User,
        //             as: 'user',
        //             require: true,
        //             attributes: ['fname', 'email', 'phoneNo']
        //         }
        //     ]
        // }
        const newUser = await User.bulkCreate(UserData)
        // result = await User.findAll({
        //     where: {

        // fname:{
        // [Op.in]:['Lenore'],
        // [Op.eq]:['Fletcher']}
        // 
        // [Op.and]:[
        //     {id:1},
        //     {fname:'Lenore'},
        // ]
        // [Op.or]:[
        //     {id:1},
        //     {id:2},
        //      {id:[1,2]}
        // ]
        // id: { [Op.ne]:[2]}
        // id: { [Op.is]:null}  
        // fname:{
        //     [Op.col]:'user.fname'
        // }
        // id: { [Op.between]:[1,4]}
        // fname:{ [Op.startsWith]:'L'} //endwith, substring,ilike, regexp,notIRegexp,any
        // id: {
        //     [Op.or]:{
        //         [Op.lt]:10,
        //         [Op.eq]: null
        //     }
        // }




        // },
        // order: [
        //     ['fname','DESC'] // order by descending order
        // ],
        // attributes: [
        //     [sequelize.fn('', sequelize.col('fname')), 'Fletcher']
        // ] 
        // })
        //update user data 
        // result= await User.update({fname:'omkar'},{
        //     where: {
        //         fname: 'Lenore'
        //     }
        // })
        // result = await User.destroy({
        //     where: {
        //         id:1
        //     }
        // })

        // result.save()
        // result = await User.findAll({group:'fname'})
        // result = await User.findAll({limit:10,offset:5 })

        // give the count to the result
        // result = await User.count({
        //     where: {
        //         id:{
        //             [Op.lt]:10,
        //         }
        //     }
        // })

        // max min sum 
        // result = await User.sum('id') // min, max
        
        console.log("All users:", (result.length));
        return result
    } catch (error) {
        console.log("repository.user.user.search::", error);
    }
}

module.exports = search