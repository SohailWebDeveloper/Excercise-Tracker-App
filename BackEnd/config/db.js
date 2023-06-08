import mongoose from "mongoose";


const dbConnection = async()=>{
   try {
    let conn = await mongoose.connect(process.env.DB_URL)
    console.log(`DataBase connected on Host${conn.connection.host}`.bgMagenta)
   } catch (error) {
    console.log("error in connection")
   } 
}

export default dbConnection