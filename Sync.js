const fs =require('fs');
const { isGeneratorFunction } = require('util/types');
console.log(fs);
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{   //utf8 file format hota //callback es6
    if(err) throw err;
    //console.log(data);

});



