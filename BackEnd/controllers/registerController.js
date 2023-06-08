import express from "express";
import userModel from "../models/userModel.js";
import { hashPassword,comparePassword } from "../helpers/authHelpers.js";
import JWT from "jsonwebtoken";
export const registerController = async (req,res) => {
  try {
    const { name, email, password, lName } = req.body;
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        userAvailable:true,
        success: true,
        message: "User already regsitered",
      });
    }
    const hashedPassword = await hashPassword(password)
    let user = await new userModel({ name, email, password:hashedPassword, lName }).save();

    res.status(201).send({
      userAvailable:false,
        success:true,
        user,
        message:"User Registered Successfully"
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
    try {
      // only email and password required to login / destructure from req.body
      const { email, password } = req.body;
      if (!email || !password) {
        return res.send({  success: false,message: "invalid email or password" });
      }
  
      // checking DB if a specific email address is available in DB or not
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.send({
          message: "invalid email address",
          success: false
        });
      }
  
      // upon availability of data, comparing plain password with hashed password already available in DB
      const match = await comparePassword(password, user.password);
  
      if (!match) {
        return res.send({
          message: "Password does not match",
          success: false
        });
      }
  
      // JWT Token assigning if password match with the plain and hashed password
  
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_KEY, { expiresIn: "1d" });
      res.status(200).send({
          success: true,
          message: "loggedin successfully",
          user:{
              name: user.name,
              email: user.email,
              lName: user.lName,
              id:user._id
          },
          token
      })
  
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      })    
      }
  };
