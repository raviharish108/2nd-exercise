const express = require('express')
const fs=require("fs");
const app = express()


    let dt=new Date();
    let date=("0"+dt.getDate()).slice(-2);

    let month=("0"+(dt.getMonth()+1)).slice(-2);

    let year=dt.getFullYear();

    let hours=dt.getHours();

    let minute=dt.getMinutes();

    let seconds=dt.getSeconds();
    var output=year + "-"+month+"-"+date+" "+hours+":"+minute+":"+seconds;


const quote=output;
app.get('/create',   function (req, res) {   
 fs.writeFile(`./${year + "-"+month+"-"+date}.txt`,quote,err=>{
 console.log("completed task")
 console.log(quote);
 })
 
 res.send
})

// app.get('/find', function (req, res) {
//     res.sendFile(__dirname + "/index.html");
//    })
app.get('/find', function(req,res){
  res.sendFile(__dirname + `/${year + "-"+month+"-"+date}.txt`);
})
  

app.listen(3000)