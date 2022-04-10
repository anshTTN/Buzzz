const jwt = require('jsonwebtoken')

const JWT_SECRET='SLEEPYANKITBUOYYYYY'

module.exports=(req,res,next)=>{
    let token=req.headers('auth-token');

    if(!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    

        try{
            const data =jwt.verify(token,JWT_SECRET);
            req.user=data.user;
            next();
        }
        catch(err){
            res.status(401).send({err:"Please authenticate using a valid token"})
        }
    

}