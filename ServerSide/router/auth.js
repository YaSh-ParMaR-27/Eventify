const express = require('express');
const cookieParser = require('cookie-parser')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/authenticate');

router.use(cookieParser());

require('../DB/connectDB');
const {RegisteredUserData,ContactUserData} = require('../Model/userSchema');

router.get('/',(req,res)=>{
    res.send('Hello from the server router');
});



//Register Route
router.post('/register',(req,res)=>{

    const {name , email , mobile , password} = req.body;

    if(!name || !email || !mobile || !password){
        return res.status(422).json({error:"All fields need to be filled properly!"});
    }

    RegisteredUserData.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email already exist!"});
        }

        //below line is same as 
        //const user = new RegisteredUserData({name:name , email:email , mobile:mobile , password:password});
        //if the key value pair have the same name the we can write them like we have done below 
        const newUser = new RegisteredUserData({name , email , mobile , password});

        //before save our hashing password code will run
        newUser.save().then(()=>{
            res.status(201).json({message:"user registered successfully"});
        }).catch((err)=>{
            res.status(500).json({error:"Failed to register!"});
        })
    }).catch((err)=>{
        console.log(err);
    })
})


//Login Route
router.post('/login', async (req,res)=>{
    try{
        let token; 
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"All fields must be filled!"});
        }
        const userLogin = await RegisteredUserData.findOne({email:email});

        if(userLogin){
            const isPwdMatching = await bcrypt.compare(password,userLogin.password);
            
            //calling for generate token in userSchema.js 
            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie('jwt_token',token,{
                expires: new Date(Date.now() + 25892000000) ,//this token will expire automatically in 30 days
                httpOnly:true,
                // requireSSL:true
            });

            if(!isPwdMatching){
                res.status(400).json({error:"Invalid credentials"})
            }
            else
                res.json({message:"user login successfull"})
        }
        else{
            res.status(400).json({error:"Invalid credentials"})
        }
    }
    catch(err){
        console.log(err);
    }
})

//logout route
router.get('/logout',(req,res)=>{
    console.log('hello logout page');
    res.clearCookie('jwt_token',{path:'/'});
    res.status(200).send('User logout');
});

//Contact route
router.post('/contact', async (req,res)=>{
    
    const {name , email , subject , message} = req.body;

    if(!name || !email || !subject || !message){
        console.log('error in contact form');
        return res.status(422).json({error:"All fields need to be filled properly!"});
    }

    const contactedUser = new ContactUserData({name , email , subject , message});

    
    contactedUser.save().then(()=>{
        res.status(201).json({message:"Message send successfully"});
    }).catch((err)=>{
        res.status(500).json({error:"Failed to send message!"});
    })
})

//authencticating the user for  booking the ticket 
router.get('/about', Authenticate ,(req,res)=>{
    res.send(req.rootUser);
});


module.exports = router;