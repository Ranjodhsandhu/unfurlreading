const jwt = require('jsonwebtoken');

// should always be kept secret with environment variables
const KEY = process.env.JWT_SECRET || 'secret phrase';

// this will export the new token using the json web token package
exports.createToken = (user) => {
    return jwt.sign( user, KEY );
}

// this export will test if the token stored in cookies is for the user signed in. Returns boolean if matched
exports.verifyToken = async (token) => {
    try{
        return await jwt.verify(token, KEY);
    }catch(err){
        throw err;
    }
} 