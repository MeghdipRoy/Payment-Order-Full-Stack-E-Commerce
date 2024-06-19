// const userModel = require("../models/userModel")


// const uploadProductPermission = async(userId) =>{
//     const user =  await userModel.findById(userId)

//     if(user.role === 'ADMIN'){
//         return true
//     }
//     return false
// }

// module.exports = uploadProductPermission


const userModel = require("../models/userModel");

const uploadProductPermission = async (userId) => {
    try {
        const user = await userModel.findById(userId);  

        // Check if user exists and has a role
        if (user && user.role === 'ADMIN') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error fetching user:", error);
        return false; // or throw error depending on how you want to handle it
    }
};

module.exports = uploadProductPermission;
