//create mongoose connection and perform CRUD operation static
const mongoose = require('mongoose') // mongoose will require every operation

const insertData=async()=>{
    await mongoose.connect("mongodb://localhost:27017/Rahul")
    const ProductSchema = new mongoose.Schema({name:String})

    const ProductModel = mongoose.model('products',ProductSchema)
    let data = new ProductModel({name:"Aja",price:150})
    let result = await data.save()
    console.log(result)
}
//insertData()

//Update data 
const updateData= async()=>{
    await mongoose.connect("mongodb://localhost:27017/Rahul")
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    })
    const ProductModel = mongoose.model('products',ProductSchema)
    let data = await ProductModel.updateOne({name:"Ajaybabu"},{$set:{name:"Rahul"}})
    console.log(data)
}
//updateData()

//Delte data
const DeleteData = async()=>{
    await mongoose.connect("mongodb://localhost:27017/Rahul")
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    })
    const ProductModel= mongoose.model('products',ProductSchema)
    let data = await ProductModel.deleteOne({name:"Ajaybabu"})
    console.log(data)
}
//DeleteData()

//Read data 
const fetchdata=async()=>{
    await mongoose.connect("mongodb://localhost:27017/Rahul")
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    })
    const ProductModel = mongoose.model("products",ProductSchema)
    let data = await ProductModel.find()
    console.log(data)
}
fetchdata()