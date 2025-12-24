import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";


const app = express();
const __dirname = path.resolve();
const port = ENV.PORT;
const NODE_ENV = ENV.NODE_ENV;


console.log(port)

app.get("/health",(req,res)=>{
    return res.status(200).json({msg:"Api working"});
})


if(NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(port,()=>{ 
    console.log("Server running on port");
})
