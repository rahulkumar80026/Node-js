const os = require('os')
 
// know about os system configuration

// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.type())

// to about free memory ram
// const freemem=os.freemem()
// console.log(`${freemem / 1024 /1024 /1024}`)

//to create dynamically txt folder and write some txt message in the txt file
const fs=require('fs');
// fs.writeFileSync('demo.txt',"this is dmp class for node")

//to read the text from txt file 
// fs.readFile("demo.txt","utf-8",(err,data)=>{
//     if(!err)console.log(data)
// })

// To update txt message in txt file dynamically
// fs.appendFile("demo.txt",'hii baby i amm here',(err,res)=>{
//     if(err){
//         console.log("ERROR");
//         return
//     }
//     console.log("Append succesfully")
// })

//To rename the demo.txt to demo1.txt
// fs.rename("demo.txt","demo1.txt",(err)=>{
//     if(err){
//         console.log("ERROR")
//     }
//     console.log("Rename Succesfully")
// })


fs.unlink("demo1.txt",(err)=>{
    if(err){
        
        console.log("ERROR")
    }
    console.log("Delete Succesfully")
})

// to know where is your exe file of node and where is the folder that you are right now 
// console.log(process.argv)