// Constructor is an OOPs concepts in which whenever object is created, constructor is call to initialise the values.

function createStudent(name , roll , marks){
  var student = { };
    student.name = name;
    student.roll = roll;
    student.marks = marks;
  return student;
}

var student1 = createStudent("prasam" , "201b189" , 90);
console.log(student1);
var student2 = createStudent("prashu" , "201b190" , 80);
console.log(student2); 

// In this above code we make a object student and setting its values then returning them.
// Js provides a method as constructor,

// we don't create an objects but we create a constructor using 'new' keyword. and call the method as constructor. 
// JS engine automatic create an object & returning them to you, instead of writting manually.

function createStudent(name , roll , marks)
{
  // we don't create object so we can't write student.*  Instead we use "this".*
  this.name = name;
  this.roll = roll;
  this.marks = marks;
}

var student1 = new createStudent("prasam" , "201b189" , 90);
console.log(student1);
var student2 = new createStudent("prashu" , "201b190" , 80);
console.log(student2);
