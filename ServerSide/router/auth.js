const express = require('express');
const router = express.Router();

const shortid = require('shortid');
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
    key_id: 'rzp_test_awvEJcTXVbvHpz',
    key_secret: 'LWlJxZIgbsk48EYnv67zjjoe',
});

const bodyParser = require('body-parser')

router.use(bodyParser.json());

const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Authenticate = require('../middleware/authenticate');

router.use(cookieParser());

require('../DB/connectDB');
const {RegisteredUserData,ContactUserData,EventData} = require('../Model/userSchema');

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
            return res.status(401).json({error:"All fields must be filled!"});
        }
        const userLogin = await RegisteredUserData.findOne({email:email});

        if(userLogin){
            const isPwdMatching = await bcrypt.compare(password,userLogin.password);
            console.log(isPwdMatching)
            if(!isPwdMatching){
                res.status(401).json({error:"Invalid credentials"})
            }
            else{
                  //calling for generate token in userSchema.js 
                token = await userLogin.generateAuthToken();
                console.log(token);

                res.cookie('jwt_token',token,{
                    expires: new Date(Date.now() + 25892000000) ,//this token will expire automatically in 30 days
                    httpOnly:false,
                    // requireSSL:true
                });
                res.json({message:"user login successfull"})
            }
        }
        else{
            res.status(401).json({error:"Invalid credentials"})
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


//Event route
router.post('/event', async (req,res)=>{
    
    const {eventName , date , createdAt , price, genre, venue, Img, about} = req.body;
    
    if(!eventName || !date || !createdAt || !price || !genre || !venue || !Img || !about){
        console.log('error in event filling form : some fields may be empty!');
        return res.status(422).json({error:"All fields need to be filled properly!"});
    }

    const event_data = new EventData({eventName , date , createdAt , price, genre, venue, Img, about});
    
    event_data.save().then(()=>{
        res.status(201).json({message:"Message send successfully"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({error:"Failed to send message!"});
    })
})


router.get("/geteventdetails", async (req, res) => {
    try {
      const details = await EventData.find({ });
      res.send(details);
      console.log(details);
    } catch (err) {
      console.log(err);
    }
});

router.post("/freeEventRegister",(req,res)=>{
    const {name,email,mobile,event_name} = req.body;
  
    EventData.findOne({eventName:event_name}).then((eventExist)=>{
        let count = 0;
        eventExist.registeredUser.forEach((obj)=>{
                if(obj.email === email){
                    count++;
                }
        });
    
        if(count===0){
            eventExist.updateOne({$push: {registeredUser : {name : name, email:email , mobile : mobile}}}).then(()=>{
                res.status(201).json({message:"user registered successfully for the event"});
            }).catch((err)=>{
                console.log(err);
                res.status(500).json({error:"Failed to register for the event!"});
            })
        }
        else{
            res.status(409).json({error:"user already registered"});
        }
       
    })
});


//authencticating the user for  booking the ticket 
router.get('/about', Authenticate ,(req,res)=>{
    res.send(req.rootUser);
});


router.post('/razorpay', async (req,res)=>{
    const {name,email,mobile,event_name} = req.body;

    const amount = 5
    const currency = 'INR'

    const options = {
        "amount": amount*100,
        "currency": currency,
        "receipt": shortid.generate(),
        "partial_payment": false,
        "notes": {
            "name": name,
            "email": email,
            "mobile" : mobile,
            "event_name": event_name
        }
    }

    EventData.findOne({eventName:event_name}).then(async (eventExist)=>{
        let count = 0;
        eventExist.registeredUser.forEach((obj)=>{
                if(obj.email === email){
                    count++;
                }
        });
    
        if(count===0){
            try{
                const response = await razorpay.orders.create(options);
                console.log(response);
                res.json({
                    id:response.id,
                    currency :response.currency,
                    amount:response.amount
                })
            }
            catch(err){
                console.log(err);
            }
        } 
        else{
            res.status(409).json({error:"user already registered"});
        }
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/verification',(req,res)=>{
    const secret = '12345';

    const crypto = require('crypto');
    
    const shasum = crypto.createHmac('sha256',secret)
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest('hex');

    // console.log(digest, "<----->",req.headers['x-razorpay-signature'])

    if(digest ===  req.headers['x-razorpay-signature']){
        // console.log('request is legit');
        //put it in event database
        
        const {id,amount,currency,order_id,status,captured,method,description,notes,fee} = req.body.payload.payment.entity;
        const razorpaySignature = req.headers['x-razorpay-signature'];

        // console.log(req.body.payload.payment.entity.status)
        // console.log(req.body.payload.payment.entity.captured)

        //Imp : id , order_id , razorpaySignature
        
        if(req.body.payload.payment.entity.captured){
            EventData.findOne({eventName:notes.event_name}).then((eventExist)=>{
                eventExist.updateOne({$push: {registeredUser : {name : notes.name, email:notes.email , mobile : notes.mobile, payment_details : {id, order_id,status,captured,amount,fee,currency,method,description,razorpaySignature}}}}).then(()=>{
                    res.status(201).json({message:"user registered successfully for the event"});
                }).catch((err)=>{
                    console.log(err);
                    res.status(500).json({error:"Failed to register for the event!"});
                })
            })

        }

    }
    else{
        console.log("Unauthorized Payment!!");
    }

    // res.send({status : 'ok'}); isko check karna ye jaroori hai kya ?
})

module.exports = router;