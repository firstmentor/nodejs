// pre define module
//server create karna

const http = require("http");
const server =http.createServer(function(req,res){
res.writeHead(200,{"content-type":"text/html"});  //plain
    res.write("<h1>Node Js PNINFSYS</h1>")
    res.write("<h1>Nodemon gwalior Js PNINFSYS</h1>")
    res.end();

}).listen(3000,()=>console.log("Server is Running posrt 3000")); //event //function 2 paramenter pass