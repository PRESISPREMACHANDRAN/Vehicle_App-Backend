const express=require("express")
const cors=require("express")
const bodyParser=require("body-parser")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



// add vehicle details
app.post("/add",(req,res)=>{
    var data=req.body
    res.json({"status":"Success","data":data})
})

// viewAll vehicle 
app.post("/viewAll",(req,res)=>{
    var data=req.body
    res.json({"status":"success","data":data})
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