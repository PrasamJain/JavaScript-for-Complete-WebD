// Instead of making a function, we make a class which contain the constructor function and getPrice()
// Classes in JS not like a C++ , Java.
// It was just conventional prototype.

class vehical{
  
  constructor(numWheel, price){     //using constructor keyword
    this.numWheel = numWheel;
    this.price = price;
  }
  // In function we make getPrice() using prototype but in class we make directly. The working is same like prototype.
  getPrice(){
    return this.price;
  }
}

//Now creating object to the class remain same like function
var v1 = new vehical(5,10000);
var v2 = new vehical(10,20000);

// type of class "vehical" is a function not class.
typeof(vehical)      // "function"

// If you don't add constructor to a class then - default empty constructor will be added automatically.

vehical === vehical.prototype.constructor     //true

// In normal function we make object without "new" keyword but in classes we can't.
// The normal function are hoisted but class hoisting not be there. We can't make object before class declaration.

//Similar to function Expresion we create class expression also...
var vehical = class{
  constructor(numWheel, price){
    this.numWheel = numWheel;
    this.price = price;
  }
  getPrice(){
    return this.price;
  }
}
var v1 = new vehical(5,10000);
var v2 = new vehical(10,20000)
