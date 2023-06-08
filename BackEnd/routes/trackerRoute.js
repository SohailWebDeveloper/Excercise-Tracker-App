import express from 'express'
import {addWorkout,showWorkout,deleteWorkout,singleWorkout,updateWorkout} from '../controllers/trackerController.js'

const router = express.Router();

router.post('/addactivity',addWorkout)
router.get('/showactivity',showWorkout)
router.delete('/deleteactivity/:id',deleteWorkout)
router.get('/singleactivity/:id',singleWorkout)
router.put('/updateactivity/:id',updateWorkout)

export default router