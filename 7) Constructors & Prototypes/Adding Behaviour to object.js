// ADDING BEHAVIOUR TO OBJECTS or ADDING FUNCTIONS INSIDE CONSTRUCTORS...

function vehical(no_wheel, price)
{
  this.no_wheel = no_wheel;
  this.price = price;
  
  //getPrice is the function which return the price of vehicals...
  this.getPrice = function(){
    return price;
  }
}

var car = new vehical(4 , 40000);
var bus = new vehical(6 , 80000);

var price = car.getPrice();
console.log(price);         //40000

var price = bus.getPrice();
console.log(price);         //80000

// The problem with constructor is that -

// When we create the object like car & bus, it creats a copies of data types , functions which is written inside constructor. 
// so, their is waste of memory because if their are 1000 of vehicals objects then 1000 copies are made for each object.
// So, avoiding this problem we use "prototypes"
