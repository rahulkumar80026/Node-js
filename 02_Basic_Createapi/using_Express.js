const express=require("express") // Express is a web framework for Node.js.
const app=express();

app.get('/path',(req,resp)=>{
    resp.send("hey its my first server created using express js")
})

app.listen(4000,()=>{
    console.log("Server Connected")
})


