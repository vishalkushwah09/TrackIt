import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
 
const mongo =   mongoose.connect(process.env.MONGO_PATH2).then(()=>{
    console.log("Databse connected successfull");
}).catch((err)=>{
    console.log(`database connection failed ${err}`);
    
})

export default mongo;