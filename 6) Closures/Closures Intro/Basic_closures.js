// Intro too closures

// Closures is a concept where inner funtion preserve the scope chain of outer function.

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

var i = 10;   //globle scope
function outer()
{
  var j = 20;
  //console.log(i,j);
  var inner = function()   
  {
    var k = 30;
    console.log(j,k);
    j++;      
    k++;
  }
  return inner;   //we can store the function in variable & returning them.
}

var inner = outer();
inner();          //20 30
inner();          //21 30

//j will be increase but k not because, every inner() call k will re declare.
// when we call outer (), then j will also not increase.

// the value of j & k are in local scope, they destroyed after outer() get over.
// but we access these value after they function get over using closures.
// Because these values are store somewhere in memory.
