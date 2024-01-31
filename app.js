const express=require("express")
const cors=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const { vehicleModel } = require("./Model/VehicleModel")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb+srv://presi123:presi123@cluster0.dfo33ti.mongodb.net/VehicleDB?retryWrites=true&w=majority");


// add vehicle details
app.post("/add",async(req,res)=>{
    var data=req.body
    let vehicles=new vehicleModel(data)
    let result=await vehicles.save()
    res.json({"status":"Success","data":result})
})

// viewAll vehicle 
app.post("/viewAll",async(req,res)=>{
    let result=await vehicleModel.find()
    res.json({"status":"success","data":result})
})

// SearchVehicle
app.post("/search",(req,res)=>{
    var data=req.body
res.json({"status":"success","data":data})
})

// delete vehicle
app.post("/delete",(req,res)=>{
    var data=req.body
res.json({"status":"success","data":data})
})

app.listen(4000,()=>{
    console.log("server starts running.........")
})