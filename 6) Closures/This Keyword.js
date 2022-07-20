// we have 2 way to craete a functions. Each have diffrent scope of "this".
// the value of "this" is depends on the way of calling of functions.

// way 1 :- simple function calling OR function expresion

'use strict'

function demo(a,b){
  console.log(this);   //globle scope
  console.log(a,b);
}
demo();     
// OUTPUT : Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//OR

var demo2 = function(){
  console.log(this);
}
demo2();
// if we use "strict mode" then output of both the above case is - undefined.


// way 2 :- make object and then calling the function ---------------------------------------------------
var obj = {
  'temp' : 12,
  'display' : function(){
  console.log(this);
  }
}
obj.display();

// {temp: 12, display: ƒ}

/* if we can use strict mode then it will shown undefined. So, we can bind any simple function with an object by two methods : 
1) call method - pass arguments in this call()
2) apply method - only pass object   
*/

demo.call(obj,5,7);   //pass any object & arguments that you have created. Now this demo() bind to obj.

demo2.apply(obj);   

//so using strict mode also, you can use this in funciton which is not refer to window object.

