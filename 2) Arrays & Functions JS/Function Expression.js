/* _____-___________Function Expression(assign functions to a var.)___________________________ */

// this is a function declaration - first declare it ans then use it.

function fact(n)
{
  var ans =1;
  for(var i=1;i<=n;i++)
    {
      ans*=i;
    }
  return ans;
}

var factorial = fact(5);
console.log(factorial);


//this is function Expression -
		//One way is "named" function:
		//Another way is "anonymous" function:


//Named function
var factorial = function fact(n) 
{
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
};
console.log(factorial(5));

//Another way is "anonymous" function:
//If we dont give any name to a function then they take name of var.
// in this case function name is - factorial2() but in above case name is fact().

var factorial2 = function (n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
};
console.log(factorial2);
