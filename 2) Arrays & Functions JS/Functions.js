//we use function keyword to declare any function in JS.
// var s = window.prompt()    //input

 function desplay(d)
   {
     console.log("inside")
     return d
   }

 function show(s)
 {
   alert("outside")
   return desplay(s)
 }

 alert(show(s))

 //________________________________________________________________________________________

 function fun(a,b)
 {
   return a+b
 }
 alert(fun(3))  
 //only pass one agrmt. it gives NaN
// becoz a = 3 but b = undefined so, value + undefined = NaN.
