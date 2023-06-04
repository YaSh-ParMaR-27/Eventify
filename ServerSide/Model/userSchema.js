const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//schema for user registration
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    mobile:{
        type : Number,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    date:{
        type:Date,
        default:Date.now
    },
    tokens : [
        {
            token:{
                type : String,
                required : true
            }
        }
    ]
})
//schema for admin registration
const adminSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    securityKey:{
        type:String,
        required:true,
    },
    password:{
        type : String,
        required : true
    },
    date:{
        type:Date,
        default:Date.now
    },
    tokens : [
        {
            token:{
                type : String,
                required : true
            }
        }
    ]
})


//scchema for Contact form
const contactUsUserSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    subject:{
        type : String,
        required : true
    },
    message:{
        type : String,
        required : true
    },
    date:{
        type:Date,
        default:Date.now
    },
})


//Schema for EVENTS 
const eventSchema = new mongoose.Schema({
    eventName :{
        type : String,
        required:true
    },
    date :{
        type : String,
        required:true
    },
    time: {
        type: String,  
        required : true
    },
    regDeadline:{
        type:String,
        default:""
    },
    totSeats:{
        type:Number,
        required:true
    },
    availSeats:{
        type:Number,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    genre:{
        type : String,
        required:true
    },
    venue:{
        type:String,
        required : true
    },
    organizer :{
        type:String,
        required:true
    },
    Img : {
        data:Buffer,
        type:String,
       
    },
    about:{
        type:String,
        required:true
    },
    registeredUser : {
        type:Array
    }
})


//Hashing the password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,12); 
    }
    next();
})

//Generating token for user
userSchema.methods.generateAuthToken = async function(){
    try{
        let jwtToken = jwt.sign({ _id : this._id} , process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:jwtToken});
        await this.save();
        return jwtToken;
    }
    catch(err){
        console.log(err);
    }
}


//collection creation
const RegisteredUserData = mongoose.model('Registration',userSchema);
const RegisteredAdminData = mongoose.model('Admin',adminSchema);
const ContactUserData = mongoose.model('Contact',contactUsUserSchema);
const EventData = mongoose.model('Event',eventSchema);


module.exports = {RegisteredUserData,ContactUserData,EventData,RegisteredAdminData};

