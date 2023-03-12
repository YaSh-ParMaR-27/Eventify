const jwt = require("jsonwebtoken");
const {RegisteredUserData} = require("../Model/userSchema");

const Authenticate = async (req,res,next)=>{
    try{
        const token = req.cookies.jwt_token	;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await RegisteredUserData.findOne({_id:verifyToken._id,"tokens.token":token})

        if(!rootUser){
            throw new Error('user not found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next(); 
    }
    catch(err){
        console.log(err);
        res.status(401).send("Unauthorized:No token provided");
    }
}

module.exports = Authenticate;