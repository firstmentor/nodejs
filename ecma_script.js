//ECMASCRIPT or ES6 2015
//let ,const , templating string, class


// var a = 20;
// var a =30;

//let a =40;
//let a =60;

// function itm(){   //scope varibale
//     let a =60;
// console.log(a);    
// }

// itm()
// console.log(a);




//const


// const a= 30;
// const b =50;

// console.log(a)


// const a = {       //const ki value change nahi kar skate hai par change karna h to ushe object bana lo
//     name:"pninfosy",
//     age : 30
// }
// //add  data
// a.email="jain@gmail.com";
// //change value
// a.age =40
// console.log(a);



//templating string

var name  = 'raj';
var age =28;

//console.log("h1 "+name+" you are "+age+" years old");

//templating sring
//console.log(`h1  ${name} you are ${age} years old`);



//class 

class user{
    // constructor(){
    //     this.name ="raj";
    //     this.age =28;
    // }

    constructor(name,age){
        this.name =name;
        this.age =age;
    }
    getName(){
        this.email ="jain@gmail.com";
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail()
    {
        return this.email;
    }
}

//var u = new user();
var u = new user("ram",34);
console.log(u.getName());
console.log(u.getEmail());
