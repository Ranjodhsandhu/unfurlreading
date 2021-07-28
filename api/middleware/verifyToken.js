const { verifyToken } = require('../tokens/tokenService');

exports.verifyToken = async ( req, res, next ) => {
    try{
        const { cookies } = req;
        if( !cookies || !cookies.token){
            res.status(403).json({
                message: 'unauthorized'
            });
            return;
        }

        const token = cookies.token;
        const user = await verifyToken(token);
        req.user = user;
        next();
    }catch(err){
        console.log(err);
        res.status(403).json({
            message: 'invalid token'
        })
    }
}