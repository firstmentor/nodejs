// var student = function(){   //class
//     this.name = "pn";
//     this.age = 27;
//     this.email ="jainvikas@gmail.com"

// }
function student(){   //class
    this.name = "pn";
    this.age = 27;
    this.email ="jainvikas@gmail.com"

}

student.prototype={
    address:"gwalior",
    getname:function(){
        return this.name;
    }
}
var stud = new student();  //object
//console.log(stud.address);
console.log(stud.getname());