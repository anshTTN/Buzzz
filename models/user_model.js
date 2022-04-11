const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const UserRegistrationSchema=new Schema({
    first_name:{
        type:String,
        default:null
    },
    last_name:{
        type:String,
        default:null
    },
    email:{
        type:String,
        default:null
    },
    designation:{
        type:String,
        default:null
    },
    gender:{
        type:String,
        default:null
    },
    dob:{
        type:Date,
        default:null
    },
    city:{
        type:String,
        default:null
    },
    state:{
        type:String,
        default:null
    },
    pin_code:{
        type:Number,
        default:null
    },
    my_website:{
        type:String,
        default:null
    },
    bio:{
    type:String
  },
  requests:[],
    password:{
        type:String,
        default:null
    },
    googleAuth:{
        type:Boolean,
        default:false
    }
});

module.exports= mongoose.model('user',UserRegistrationSchema);
