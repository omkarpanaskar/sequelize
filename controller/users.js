const userRepo = require('../repository')
const search = async (req, res, next) => {
    try {
        let userData = [];
        let program = await userRepo.userRepo()
       userData.push(program);
        let response = {
            userData
        }
        console.log("Program::\n",program);
        res.render('index', {response})
    } catch (error) {
        console.log("controller.users.search::", error);
        next(error)
    }
}
module.exports = search;


