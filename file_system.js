const fs =require('fs')   //module file system

// //console.log(fs);
// fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{   //utf8 file format hota //callback es6
//     if(err) throw err;
//     console.log(data);

// });//fileka path//event hota h call back value return karta hai

//(err,data)=> es6 2 parameter define karta h 


// fs.unlink(__dirname+"/hello.txt",(err,data)=>{
// if(err) throw err;
// console.log("File Deleted"+data);
// });

 

//file system to coonect server

const http = require("http");
const server =http.createServer(function(req,res){

fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{ 
    res.writeHead(200,{"content-type":"text/plain"});  //plain
    res.write(data);
    
    res.end();
});

}).listen(3000,()=>console.log("Server is Running posrt 3000"));    