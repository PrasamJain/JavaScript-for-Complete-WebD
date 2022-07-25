// their are two way to create an object

var obj = { };
//OR
var obj = new Object();   //Object() is a constructor function.

//Object also have a two properties - object itself & Object prototype.

function vehical(no_wheel, price){
  this.no_wheel = no_wheel;
  this.price = price;
  }

vehical.prototype.getPrice = function(){    // we use function as a prototype
    return this.price;
}

var v1 = new vehical(5,10000);
var v2 = new vehical(10,20000);

// if we create object with new keyword which is similar to the prototype shown above.
vehical.prototype   

// similarlly,
Object.prototype    // fine!! give the prototype of object.

// var obj = new Object();
// obj is the object which inherit the property from Object.prototype So it has also "__proto__" property.
// all the object we created has inherit the property from Object.prototype.
