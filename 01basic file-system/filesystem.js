const path=require('path')
const fs = require('fs')

// console.log(__dirname) //its shows the path of directory that where is your file right now 

// console.log("File_name",__filename) // its shows path with file name

const pathDir = path.join(__dirname,"files") 

// console.log(pathDir)

for(var i =0;i<2;i++){
    fs.writeFileSync(pathDir+"/demo"+i+"txt","this is path ${i}")
}
