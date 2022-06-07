/*____________________SPLICE FUNCTION ____________________*/


//splice is used for changing inside the array. changing may be deletion or insertion.

// Syntax : it takes three arguments - (starting index, deletion count, element to be inserted)
// *the third argument are optional.

/* deletion count - how many elements are to be delete after starting index.
element to be inserted -  
*/

ar.splice(1, 2);      //starinf from 1 and delete 2 elements
ar.splice(1);        // if we give only one argument then it delete whole elements from staring index

ar = [2, 3, 4, 5, 6, 7];

ar.splice(3, 0, 50); // at index 3 delete nothig and insert 50 at index 3.
ar.splice(3, 0, 10, 20, 30, 40); //adding more than one elements staring from index 3 onword


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
*/