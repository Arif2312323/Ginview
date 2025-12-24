import express from "express";
import { ENV } from "./lib/env.js";



const app = express();
const port = ENV.PORT;

console.log(port)

app.get("/",(req,res)=>{
    return res.status(200).json({msg:"Api working"});
})

app.listen(port,()=>{ 
    console.log("Server running on port");
})
