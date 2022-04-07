const dotenv= require('dotenv')
const {OAuth2Client} = require('google-auth-library');
const usersData=require("../models/user_model")
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')

const JWT_SECRET='SLEEPYANKITBUOYYYYY'

dotenv.config();
const client=new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

//google login
exports.googleLogin=async (req,res)=>{
    const {token}=req.body;
    const ticket=await client.verifyIdToken({
        idToken: token,
        audience:process.env.REACT_APP_GOOGLE_CLIENT_ID,
    })
    const {name,email,picture}=ticket.getPayload();
    res.status(201);
    console.log(ticket.getPayload());
    res.json({name,email,picture})
}



//user register
exports.userRegistration=(req,res)=>{
    const {
        first_name,last_name,email,designation,gender,dob,pin_code,city,state,password
    }=req.body;

    usersData.findOne({email:email}).exec((err,user)=>{
        if(user){
            return res.status(400).json({status:'failure',message:'This email is already registered.'})
        }else{
            const salt=bcrypt.genSaltSync(10);
            const userDetails=new usersData({
                first_name:first_name,
                last_name:last_name,
                email:email,
                designation:designation,
                gender:gender,
                dob:dob,
                pin_code:pin_code,
                city:city,
                state:state,
                password:bcrypt.hashSync(password,salt),
            })

            userDetails.save().then(resp=>{
                return res.status(200).json({status:"success",message:"Registered succesfully",email:resp.email,password:resp.password})
            }).catch(err=>{
                usersData.findOneAndDelete(({email:email}),(err)=>{
                    if(err)
                    console.log(err)
                })
                console.log(err)
                return res.status(400).json({status:"failure",message:'This email is already registered.'})
            })
        }
    })
}



//user login using email
exports.userLogin=(req,res)=>{
    const {
        email,password
    }=req.body;

    usersData.findOne({email:email}).exec((err,user)=>{
        if(!user){
            return res.status(400).json({status:'failure',message:'This email is not registered.'})
        }else{
            const pswdCompare=bcrypt.compareSync(password,user.password)
            if(!pswdCompare){
                return res.status(400).json({status:'failure',message:'Password is incorrect.'})
            }
            else{
                const data={
                    user:{
                        is:user.id
                    }
                }
                const authToken=jwt.sign(data,JWT_SECRET);
                res.status(200).json({
                    status:"success",
                    message:"login successful",
                    email:user.email,
                    token:authToken
                })
            }
         
        }
    })
}



// {
//     //     "first_name":"Ansh",
//     //     "last_name":"Mittal",
//         "email":"a1@gmail.com",
//         // "designation":"Traineee",
//         // "gender":"Male",
//         // "dob":"200/11/28",
//         // "pin_code":248001,
//         // "city":"Dehradun",
//         // "state":"Uttarakhand",
//         "password":"ansh"
//     }