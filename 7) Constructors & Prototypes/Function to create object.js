// we create a object of student.

var student1 = {
  name : 'prasam',
  roll : '201b189',
  marks: 90
};
console.log(student1);

var student2 = {
  name : 'Prashu',
  roll : '201b190',
  marks: 80
};
console.log(student2);

//now if we have 1000 of students so we don't create individual to all.
// but instead of we create a function to create an object to students.

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

//this ia much easy as campare to above one.
//Note : we can use Loops to create an object of 100 students and pass the value to the function.
// take the values from the users  shown below :-

var a = [];
for(var i=0;i<5;i++)
  {
    var name = window.prompt("Enter the name of student"+(i+1));
    var roll = window.prompt("Enter the roll No of student"+(i+1));
    var marks = window.prompt("Enter the marks of student"+(i+1));
    a[i] = createStudent(name , roll , marks);
  }

for(var i=0;i<5;i++)
  {
    console.log(a[i]);
  }
