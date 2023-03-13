const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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



//Hashing the password
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hashSync(this.password,12); 
    }
    next();
})

//Generating token
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
const ContactUserData = mongoose.model('Contact',contactUsUserSchema);

module.exports = {RegisteredUserData,ContactUserData};

