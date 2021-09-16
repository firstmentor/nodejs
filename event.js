//Create and Trigger Custom Event
// $("#button").on('click', function(){
//     console.log("First event created");
// });
const events = require("events");  //events ko call kiya 
const event = new events.EventEmitter(); //events ka object create karta hai

// event.on('click',()=>console.log("Hello Gwalior"));    //()=> es6
// event.emit('click'); //run karna

//parameter pass
// event.on('click',(n1)=>console.log(n1));    //()=> es6
// event.emit('click',"Hello gwaliordd"); //run karna


// event.on('click',(n1,n2)=>console.log(n1+n2));    //()=> es6
// event.emit('click',4,5); //run karna



//ek event ke andara dusra event 

const first_event = function(n1,n2){     //first event
    console.log(n1-n2)
    event.emit('click2');
}

const second_event = function(){     //first event
    console.log("Second event Triggered");
    event.emit('click3');
}

const Third_event = function(){     //first event
    console.log("Third event Triggered");
}


event.on('click3',Third_event);
event.on('click2',second_event);
event.on('click',first_event);
event.emit('click',4,5);