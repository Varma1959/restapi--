const express = require('express');
const app = express();



app.get("/api", (req,res)=>{
    res.json({
        success: 1,
        message: "The Rest Api is running in Port: 3002"
    })
})


app.listen(3002,()=>{
    console.log("Server is running")
})