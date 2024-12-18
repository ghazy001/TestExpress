const express = require("express");

const mongo = require("mongoose");
const bodyparser =  require("body-parser");
const http = require("http");




const config = require("./config/dbconnexion.json")

mongo
.connect
    (config.url , {
    useUnifiedTopology:true,
    useNewUrlParser:true,
   
})
.then(()=> console.log("data base connect "))
.catch(()=>console.log ("not connected "))


const personRouter = require("./routes/hotel.js");

var app = express();
app.use(express.json());



app.use("/hotel", personRouter);




app.use(bodyparser.json());






const server = http.createServer(app);
server.listen(3000,console.log("server run"));

module.exports=app


