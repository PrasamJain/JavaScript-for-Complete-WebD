// Inheritance in the concept where we inherit the properties from another class
class vehical{
  constructor(numWheel, price){
    this.numWheel = numWheel;
    this.price = price;
  }
  getPrice(){
    return this.price;
  }
}

//Inherit the class "car" from the vehical by using "extends" keyword
class car extends vehical{
  constructor(noDoors , price , numWheel){
    super(numWheel , price);
    this.noDoors = noDoors;      //this property only in cars not in every vehical.
  }
  getPrice(){   // use same function which is also in vehical class.
    //if we want to access the same function from vehical class then use super.funt_name
    
    var car1 = super.getPrice();
    console.log("total price "+this.price);
    return car1;
  }
}

//Note :Using this we give an error - Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// So we use super() function & pass the arguments to the vehical class

//Now creating object to the class car
var c1 = new car(4,10000,4);     // two properties goes into vehical class
var c2 = new car(2,20000,6);

console.log(c1);  
console.log(c2);  

// You can use the functions of vehical class using car object
var car1 = c1.getPrice();    
console.log(car1);

//NOTE : "car.name" prints the class name i.e "car". vehical.name -> "vehical".
