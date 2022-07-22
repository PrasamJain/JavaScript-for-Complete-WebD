//Difference between var and let.

// Now we create a for loop with "var i" and place a time out function inside it.
for(var i= 1;i<=5;i++)
  {
    setTimeout(
      function()
      {
        console.log(i);
      },1000);
  }

/*output of these for loop is 
6
6
6
6
6
execution of these code something like that
when i=1   -->  1000ms wait but when it try to print the value of i = 1, i will be increase and again wait for 1 sec.....simmilarly so on.
i=2   -->  1000ms wait
i=3   -->  1000ms wait
i=4   -->  1000ms wait
i=5   -->  1000ms wait
i=6   --> STOP

overall it wait 6 sec and after that it will print the value of i = 6.
*/

//Now it wanted to print 1 2 3 4 5 we use "let".

for(let j= 1;j<=5;j++)
  {
    setTimeout(
      function()
      {
        console.log(j);
      },1000);
  }

/*output of these for loop is 
1
2
3
4
5
because let create a local scope or block scope 
it create a different-different refernce to j at the time of setTimeout(). For every time of for loop, j value will be changed.
*/
