const express = require('express');
const router = express.Router();

const { verifyToken } = require('../../middleware/verifyToken');
const { createToken } = require('../../tokens/tokenService');

const { createUser, findUserByEmail, findUserById } = require('./userController');

// this route will take care of the signup process
router.route('/')
    .post(async (req,res)=>{

        const { email, password, firstName, lastName} = req.body;
        
        if(!email || email === ""){
            res.status(400).json({ message:
            "email must be provided" });
            return;
        }

        if(!password || password === ""){
            res.status(400).json({
                message:"password must be provided"
            });
            return;
        }

        if(!firstName || firstName === ""){
            res.status(400).json({
                message: "firstName must be provided"
            });
            return;
        }

        if(!lastName || lastName === ""){
            res.status(400).json({
                message: "lastName must be provided"
            })
            return;
        }

        try{
            const foundUser = await findUserByEmail(email);
            if(foundUser){
                res.status(400).json({
                    message: `email ${email} already exists`
                });
                return;
            }

            const user = await createUser({
                email,
                password,
                firstName,
                lastName,
            })

            res.json({ data: { id:user._id } })
        }catch(err){
            console.log(err);
            res.status(500).json({
                message: "internal server error"
            })
        }
    });

// this route will take care of the signing in process in the webpage
router
    .route('/signin')
    .post(async ( req, res )=> {
        const { email, password } = req.body;
        if( !email || email === ""){
            res.status(400).json({
                message: "email must be provided" 
            });
            return;
        }

        if( !password || password === "" ){
            res.status(400).json({
                message: "password must be provided"
            });
            return;
        }

        try{
            const user = await findUserByEmail(email);
            if( !user ){
                res.status(400).json({
                    message:"email or password is not correct"
                });
                return;
            }
            const isMatch = await user.comparePassword(password);

            if( !isMatch){
                res.status(400).json({
                    message: "email or password is not correct"
                });
                return;
            }

            const token = createToken ({
                id: user._id
            });
            res.cookie('token', token);
            res.status(200).send({
                message: `Signed in as ${user.firstName}`
            });
        }catch(err){
            console.log(err);
            res.status(500).json({
                message: "internal server error"
            })
        }
    });

router
    .use(verifyToken)
    .route('/me')
    .get(async ( req, res ) => {
        try{
            const user = await findUserById(req.user.id);
            res.json({
                data: user
            })
        }catch(err){
            console.log(err);
            res.status(500).json({
                message: "internal server error"
            })
        }
    })    



module.exports = router;