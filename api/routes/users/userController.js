const User = require('./userModel');

// this exports a function to create a new user in the database
exports.createUser = async({ email, password, firstName, lastName }) => {
    try{
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
        });

        const user = await newUser.save();
        return user;

    }catch(err){
        throw err;
    }
}

// this exports a function that finds the user by email and return it
exports.findUserByEmail = async (email) => {
    try{
        return await User.findOne({ email });
    }catch(err){
        throw err;
    }
}

// this exports a function that finds the user id and return name and email 
exports.findUserById = async ( id ) => {
    try{
        const user = await User.findById(id);
        if( !user ){
            throw new Error(` no user with ID ${id}`)
        }
    
        return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        }
    
    }catch(err){
        throw err;
    }
}