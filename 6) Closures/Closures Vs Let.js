// we already know the concept of Let Vs Var.
// use "var" in side the for loop, creates a globle scope.So, every time value of i is 6.
function test()
{
  for(var i=1;i<=5;i++){
    setTimeout(function(){
      console.log(i);
    },1000);
  }
  console.log("After for loop");
}
test();
//output will be 6 6 6 6 6. 


// instead of using "var", use "let"
function test()
{
  for(let i=1;i<=5;i++){
    setTimeout(function(){
      console.log(i);
    },1000);
  }
  console.log("After for loop");
}
test();
// Now output will be 1 2 3 4 5.
//because let creates a different reference to i every time (local scope).
