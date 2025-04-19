import express from "express"
import cors from "cors"
export const app=express();

//  MIDDLEWARES

app.use(express.json())
app.use(cors())

// INITAILIZING ROUTES

import paymentRouter from "./routes/payment.route.js"

app.use("/api/payment", paymentRouter)


// GLOBAL ERROR HANDLER

app.use((error, req, res, next)=>{
    res.json({
        message: error.message || "Something went wrong",
        status: error.status,
        stack: error.stack
    })
})