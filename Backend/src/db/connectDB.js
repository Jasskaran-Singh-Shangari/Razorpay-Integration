import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connnectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("The database is connected")
    } catch (error) {
        console.log(`Something went wong ${error}`)
    }
}

export default connnectDB;

