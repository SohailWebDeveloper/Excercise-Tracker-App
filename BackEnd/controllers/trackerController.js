import express from 'express'
import workoutModel from '../models/workoutModel.js';
import userModel from '../models/userModel.js'
export const addWorkout = async(req,res)=>{
    try {
        const {name,description,activity,duration,date}=req.body
        let workout = new workoutModel({name,description,activity,duration,date}).save();
        res.status(201).send({
            workout,
            success:true,
            message:"Workout excercise added successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in activity adding"
        })
    }
}
export const showWorkout = async(req,res)=>{
    try {
      let showActivity = await workoutModel.find();
      res.send(
        showActivity
      )
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in activity showing"
        })
    }
}

export const deleteWorkout = async(req,res)=>{
    try {
      let deleteActivity = await workoutModel.deleteOne({_id:req.params.id});
      res.send(
        deleteActivity
      )
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in deleting showing"
        })
    }
}

export const singleWorkout=async(req,res)=>{
    try {
        let singleActivity= await workoutModel.findOne({_id:req.params.id})
        res.send(singleActivity)
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in deleting showing"
        }) 
    }
}
export const updateWorkout=async(req,res)=>{
    try {
        let updatesingleActivity= await workoutModel.updateOne({_id:req.params.id},{$set:req.body})
        res.send({updatesingleActivity,message:"Activity Edited Successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in deleting showing"
        }) 
    }
}
updateWorkout

