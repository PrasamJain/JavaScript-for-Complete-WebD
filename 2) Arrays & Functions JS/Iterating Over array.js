// ForEach  :      iterating over an array using "ForEach" method......................

var ar = [1,2,3,4,5,6,7,8,9,10];

/*for(var i=0;i<ar.length;i++)
  {
    console.log(ar[i]);
  }
*/

function display(data)
{
  console.log(data); 
}

ar.forEach(display);


/*
  ****************structure of ForEach method somthing like that :-
  for(var i=0;i<ar.length;i++)
  {
    display(ar[i]);
  }
  insted of For loop - we use forEach method.