const { log } = require('console')
const express=require('express')
const app=express()


app.get('/',(req,res)=>{
    res.send("hello guys")
})


app.listen(6969,()=>{
    console.log("kelkunnund");
})