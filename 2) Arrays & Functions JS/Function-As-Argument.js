//we can pass function as a argument's : -

//function to find factorial

var factorial2 = function (n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans *= i;
  }
  return ans;
};
console.log(factorial2);

//Here is function to find ncr value using Factorials

    function ncr(n,r,factorial)
    {
      return factorial(n)/factorial(r)*factorial(n-r);
    }

    console.log(ncr(5,2,factorial));  

