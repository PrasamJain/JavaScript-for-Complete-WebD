// This is all about the concept of array in java script

var ar = [1, 2, 3];          //contain same data type
console.log(ar);

var ar = [1, 5.5, 6.9];               //contain different data type (array in JS are 'hetrogeneous' like python)
var ar = ["hello", 10, true, 1.5];
console.log(ar);

//OR

var ar = new Array(1, 2, 3, 4);           //Declare With 'new' & 'Array' keyword
console.log(ar);

//here index 4 & 5 are empty and we assign index 6 value is 10. So, it work fine!!

ar[6] = 10;
// outout : // [object Array] (7)    [1,2,3,4,,,10]

ar.lenght;         //to find length or array

//additional about array in JS.
var ar = new Array(); //make empty array
var ar = new Array(4); //pass one argument i.e 4 - means define the array of size 4.
var ar = new Array(10, 2, 3, 4); //pass more then one argument means elements of array.

//Operation on array - push, pop, shift, unshift

ar.push(20); //push from backword -top
ar.pop(); //pop also from backword i.e top (fifo)
ar.shift(); //shift left - remove from front (queue)
ar.unshift(50); //shift right - insert into front
