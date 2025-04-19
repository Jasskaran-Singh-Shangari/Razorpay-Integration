import { app } from "./app.js";
import connnectDB from "./db/connectDB.js";

connnectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log(`There has been an error: ${error}`)
    })
    app.listen(process.env.PORT, ()=>{
        console.log(`The server is listening on port ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`The DB connection failed: ${error}`)
})