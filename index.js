const express=require('express')
const blogRouter=require('./Routes/blogRouter')
const app=express()

app.use('/api/main',blogRouter)


app.listen(4001,()=>{
    try{
        console.log("server is live at port number 4001")
    }
    catch(err){
        console.log(err,"An error occurred")
    }
})