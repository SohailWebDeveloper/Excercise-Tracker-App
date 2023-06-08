import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    activity:{
        type:[String],
        required:true
    },
    duration:{
     type:String,
     required:false
    },
    date:{
        type:String,
        required:false
    }
})

export default mongoose.model("workouts",workoutSchema)