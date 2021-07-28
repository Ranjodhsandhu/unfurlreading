const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

// the user schema provides the structure of the user table in mongoDB database
const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});

// this function from bcryptjs package helps convert the user typed password to the hashing/encrypted form
userSchema.pre('save', async function(next){
    try{
        const user = this;
        if(user.isModified('password') || user.isNew ){
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
        }
        next();
    }catch(err){
        next(err);
    }
});

// this method helps compare the user password by auto converting the encrypted password and return boolean depending on the result
userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', userSchema);