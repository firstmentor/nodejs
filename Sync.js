//sankoniyas  Asankoniyas
const fs =require('fs');

//console.log(fs);
//Asankoniyas methods
// fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{   //utf8 file format hota //callback es6
//     if(err) throw err;
//     console.log(data);

// });
//console.log("Hello gwalior");


//step by step
try{
    const data =fs.readFileSync(__dirname+"/hello.txt","utf-8");
    console.log(data);
}catch(e){
    console.log(e);
}

console.log("hello gwalior");



