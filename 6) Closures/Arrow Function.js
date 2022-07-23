// we have simple function in js
var adding = function(a,b){
  return a+b;
}
console.log(adding(5,10));      //15

// now make easy to write function in js use "arrow functions".

var adding =    (a,b)    =>    { return(a+b) };
//          arguments   arrow        body

console.log(adding(5,10));       //15

// OR if we have only single line code don't write paranthesis.
var adding = (a,b)  => a+b;
console.log(adding(5,10));       //15

// OR if we have only one argument then write like this - 
var square = x => x*x;
console.log(square(5));     //25

// Note : Read binding in arrow function yourself.
