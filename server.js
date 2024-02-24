const { log } = require('console')
const express=require('express')
const app=express()
const port = 3000


app.get('/',(req,res)=>{
    res.send("hello guys")
})


app.listen(port,()=>{
    console.log("kelkunnund");
})