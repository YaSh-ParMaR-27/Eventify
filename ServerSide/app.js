const dotenv = require('dotenv');
const express = require('express');


const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config({path:'./config.env'});
require('./DB/connectDB');
const PORT = process.env.PORT;

app.use(express.json())
app.use(require('./router/auth'));

// const RegisteredUserData = require('./Model/userSchema');

const middleware = (req,res,next)=>{
    console.log('Hello from middleware');
    next();
}







app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})