import mongoose from "mongoose";

const urlschema=new mongoose.Schema({

    shortID:{
        required:true,
        type:String
    },

    redirecturl:{
        required:true,
        type:String
    },
    clicks:{
        required:true,
        default:0,
        type:Number
    },
    location:{
        required:true,
        type:Array
    },
    time:[{
       
        type:Date,
        default:new Date()

    }],
    auth_data:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    
})
const urldata=mongoose.model("user",urlschema)
export default urldata