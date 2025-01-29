const http = require('http');

const server = http.createServer((req,resp)=>{
    req.url="first"
    resp.end("hiii its my first server using node")

})

server.listen(4000,()=>{
    console.log("Server connected")
})