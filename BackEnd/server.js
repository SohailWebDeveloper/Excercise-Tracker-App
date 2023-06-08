import express from "express";
import dotenv from 'dotenv';
import color from 'colors';
import dbConnection from './config/db.js'
import trackerRoute from './routes/trackerRoute.js'
import authRoute from './routes/authRoute.js'
import cors from 'cors'

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json())
dbConnection();
app.use('/api/v1/addworkout',trackerRoute)
app.use('/api/v1/showworkout',trackerRoute)
app.use('/api/v1/deleteworkout',trackerRoute)
app.use('/api/v1/singleworkout',trackerRoute)
app.use('/api/v1/updateworkout',trackerRoute)
app.use('/api/v1/registeruser',authRoute)
app.use('/api/v1/loginuser',authRoute)



const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`.bgYellow.blue)
})