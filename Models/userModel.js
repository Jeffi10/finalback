import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:
    {
        type:Number,
        required:true
    },
    email:
    {
        type:String,
        required:true
    }
})
export default mongoose.model('CRUD',userSchema)