const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const UserRegistrationSchema=new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    designation:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    pin_code:{
        type:Number,
        required:true
    },
    my_website:{
        type:String,
        default:null
    },
    password:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('user',UserRegistrationSchema);