import express from "express"

const app=express()

app.get("/", (req, res)=>{
    res.send("The app has started")
})

app.listen(process.env.PORT, ()=>{
    console.log(`The app is listening at port ${process.env.PORT}`)
})