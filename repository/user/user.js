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
        const newUser= await User.bulkCreate(UserData)
        result = await User.findAll({
            where: {
                    fname:{
                        [Op.in]:['Lenore','Lareina']
                    }   
            },
            order: [
                ['fname','DESC'] // order by descending order
            ],
            // attributes: [
            //     [sequelize.fn('', sequelize.col('fname')), 'Fletcher']
            // ] 
        })
        // console.log(result.every(user => user instanceof User)); // true
        console.log("All users:", (result));
        return result
    } catch (error) {
        console.log("repository.user.user.search::", error);
    }
}

module.exports = search