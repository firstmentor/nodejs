const express =require("express"); //object
const app =express(); //method
//console.log(app);
//server create

//router
app.use('/static', express.static('public'))


app.get("/",(req,res)=>{
   //res.send("Hello world");
   res.sendFile(__dirname + '/index.html');
});

app.get("/users/:Id",(req,res)=>{
    console.log(req.params);  //request
    res.send("Hello user:"+ req.params.Id);
 });

 app.get("/team/:Id/book/:BookId",(req,res)=>{   //"team/:id?"
    
   res.send("Hello team: "+ req.params.Id + "Book Id "+req.params.BookId);
});

app.get("/hello/:Id?",(req,res)=>{
   //console.log(req.params);  //request
   if(req.params.Id==undefined)
     res.send(" All data display Hello user");
   else
     res.send("Hello user:"+ req.params.Id);
});

app.post("/users/profile",(req,res)=>{    //api post main
   res.send("Hello profile postman");
});



app.listen(3000,()=>console.log("server running on port:3000"));
 