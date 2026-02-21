let mongoose = require("mongoose")
let express = require("express")
let cors = require("cors")
mongoose.connect("mongodb://localhost:27017/expressmern1db").then(()=>{
    console.log("Connection is Okay")
}).catch(()=>{
    console.log("Error in DB")
})

// User Model define 

let userschema = new mongoose.Schema({
    "_id":String,
    "name":String,
    "place":String,
    "gender":String,
    "phoneno":String,
    "dob":String
})

// Usermodel 

let Usermodel = mongoose.model("user",userschema)
let app = express()
app.listen(5000)
app.use(express.json())
app.use(cors())

// post 

app.post("/add",async(req,res)=>{
    try{
        let data=new Usermodel(req.body)
        await data.save()
        res.json({"Message":"Data Added"})

    }
    catch{
        res.json({"Message":"Error in Adding Details"})
    }
})

app.get("/data",async(req,res)=>{
    try{
        let data = await Usermodel.find()
        res.json(data)

    }
    catch{
        res.json({"Message":"Error in Getting data"})
    }
})

app.get("/search/id",async(req,res)=>{
    try{
        let data = await Usermodel.findById(req.params._id)
        res.json(data)

    }
    catch{
        res.json({"Message":"Error in Searching data"})

    }
})
