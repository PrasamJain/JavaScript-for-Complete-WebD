/* FUNTION Hoisting and Variable hoisting */

//Here we define 'i' after print statment it gives "undefined" but if we con not define 'i' it gives error.
//concept is that : 'i' is exist somewhere in function. this is called 'variable hoisting'


// Variable Hoisting

function HoistDemo()
{
  console.log(i)
  var i =20
}

HoistDemo()


      it is like this :-
                        var i;
                        console.log(i);
                        i=20;
						

// Funtion hoisting means call fnct before declartion. It will work fine.

show();
function show() {
  a = 10;
  console.log(a);
}
var a;

/*    _______________________________ SCOPE - Globle & Local(function)  _______________ */

// 1) Execution Context- It is a environment that create for a globle as well as function scope.
// 2) Execution stack - it store the info about execution context.
//     the first entry in stack is globle environment then local funcitons. i.e currently excess functions is on top of the stack. We already discussed in C/C++.

