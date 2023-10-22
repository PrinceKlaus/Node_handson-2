const blogRouter=require('express').Router()

blogRouter.get('/',(req,res)=>{
    res.send("Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.")
})

blogRouter.get("/post",(req,res)=>{
    res.send("This is post page")
})

blogRouter.get("/comments",(req,res)=>{
    res.send("This is comments page")
})


module.exports=blogRouter;