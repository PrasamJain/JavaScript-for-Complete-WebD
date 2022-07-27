// When ever you create a function the JS engine creats a two objects - function itself & Prototypes.
// we can access using - "function_name.prototype"

// When we create the object like car & bus, it creats a copies of data types , functions which is written inside constructor. so, their is waste of memory because if their are 1000 of vehicals objects then 1000 copies are made for each object.So, avoiding this problem we use "prototypes"

// In Prototype, it creats only one copy of function and it share among all the objects.


function vehical(no_wheel, price){
  this.no_wheel = no_wheel;
  this.price = price;
  //getPrice is the function which return the price of vehicals...
  this.getPrice = function(){
    return this.price;
  };
}

var car = new vehical(4 , 40000);
var bus = new vehical(6 , 80000);

console.log(vehical.prototype);  //access the prototype...
/* OUTPUT : [object Object] { }    */

//  when we access it moves functions as a prototype mode and if you want to back into constructor mode then,
console.log(vehical.prototype.constructor); 
/* OUTPUT : 
          function vehical(no_wheel, price){
            this.no_wheel = no_wheel;
            this.price = price;
            //getPrice is the function which return the price of vehicals...
            this.getPrice = function(){
              return price;
            };
          }
*/

// so instead of keeping method function getPrice() inside function, we write like this-

function vehical(no_wheel, price){
  this.no_wheel = no_wheel;
  this.price = price;
  }

vehical.prototype.getPrice = function(){    // we use function as a prototype
    return this.price;
}

var v1 = new vehical(5,10000);
var v2 = new vehical(10,20000);
console.log(v1);
// so see that object v1 not contain getPrice() function but we can use getPrice().
// so it not create a multiple copies of same function & multiple objects use them seperatly. Memory Save!!
console.log(v1.getPrice());    //10000

//------------------------------------------------------------------------------------------------------------------

// If we add same property to all objects them prototype are usefull i.e you will assign property at run time.
// you will also assign property to individual object also.

v1.color = "black";     //to perticular object
vehical.prototype.color = "red";     //to all

// when we make the object it automatically create one more property i.e "__proto__" which is equal to function.prototype

v1.__proto__ === vehical.prototype    //true

// also get prototype use - Object.getPrototypeOf(obj);
Object.getPrototypeOf(v1) === vehical.prototype;    //true
Object.getPrototypeOf(v1) === v1.__proto__;         //true

//check also "is this prototype is the prototype of this object or not" using -
vehical.prototype.isPrototypeOf(v1);   //true
vehical.prototype.isPrototypeOf(v2);   //true

//prototype also inherit the property from other.
v1.hasOwnProperty('price');     //true
v1.hasOwnProperty('getPrice');    //false because inherit from function prototype
