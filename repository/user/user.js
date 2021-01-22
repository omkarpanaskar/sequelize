const { User } = require('../../models')
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
        result = await User.findOne({
            attributes:['fname']
        })
        // console.log(result.every(user => user instanceof User)); // true
        // console.log("All users:", (result));
        return result
    } catch (error) {
        console.log("repository.user.user.search::", error);
    }
}

module.exports = search