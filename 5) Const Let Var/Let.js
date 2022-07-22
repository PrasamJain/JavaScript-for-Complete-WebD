//   LET vs VAR in JS

// with the use of "var", variable a,b,c are created in globle scope 
var a=10;
if(a<=10)
  {
    var b = 20;
  }
else
  {
    var c = 30;
  }
console.log(a,b,c);  // Output : 10 20 undefined

// but with the use of "let" we create a variable in block scope or local scope
var x=10;
if(x<=10)
  {
    let y = 20;
  }
else
  {
    var z = 30;
  }
console.log(x,y,z);   // ReferenceError: y is not defined 
//here "let y" scope only within the block not globly

// Hoiting in let ----------------------------------------------------------------------

console.log(p);      //undefine
var p=10;     

if(p<=10)
  {
    console.log(q);     // ReferenceError: Cannot access 'q' before initialization
    let q = 20;
  }

// we can't use "let" before define that i.e we can not use hoistng.
// but in "var" we can use hoisting.
