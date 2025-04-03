const http = require('http')
const cluster = require('cluster')
const os = require('os')
const { Script } = require('vm')

if(cluster.isMaster){
    console.log(os.cpus().length) // my cpu is 12. i can make 12 cluster.fork() 
    console.log("master is created")
    cluster.fork();
    cluster.fork();

    console.log('master works......!')
}
else{
    http.createServer((req,res)=>{
        setTimeout(()=>{
            res.end("request is handle by server")
        },2000)
    }).listen(4000,()=>{
        console.log("server started....!")
    })
}
// -------------------------------Problem-----------

// const http = require('http')

// http.createServer((req,res)=>{
//     setTimeout(()=>{
//         res.end("request is handle by server")
//     },5000)
// }).listen(4000,()=>{
//     console.log("server started....!")
// })

// -------------------------------------------------------


// A process is created by Node.js to execute your Script
// This process is identified by a unique process ID (PID) and is managed

// The first process created when you run this script.
// It is responsible for:
// Forking worker processes.
// Managing worker processes.
// Cluster.isMaster is true in this process.
// ---------------------------------------------------

// The current process refers to the process that is executing the script at that moment.
// When script is initially executed, the process starts as the master process.
// After forking, additional worker processes are created, and each of those process becomes a current process when they handle request. what Happen if you Fork more than 12 
// -------------------------------
// If you fork more than 12 works , the extra workers will compete for the same 
// This can result in:

// Increased cpu usage.

//  Reduce Performance due to frequent contex switching.

// No significant performance gain (or even worse performance)