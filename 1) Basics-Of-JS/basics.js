// Lets start JavaScript with Basic concept like variables declaratons etc

// 1) VARIALBLES & OPERATORs

var a = "prasam";

//we have 6 primitive value and 1 are non-primitive value i.e. object
/*
		number -64 bit
		string
		boolen
		null
		undefined 
		symbol

		object (non-primitive)
*/

console.log(a);
//if we declare variable but not assign any value it gives "undefine"
var b;
// console.log(b);
b = null;
//undefine means you don't assign value nut NULL means you assign some value but don't know what value is this.
console.log(b);

/* types OF variables */
var x = 1 / 0;
// >>> Infinity

//any number devided by 0 gives Infinity and any number devided by Infinity gives 0.
console.log(x);
console.log(Math.pow(10, 2));
console.log(Math.pow(10, 1000)); //we can't

//if we use === OR !== instead of == OR != , there is no type coercion.
//ex: 1 === "1" False  BUT 1 == "1" True


// 2) CONDITIONAL STATEMENTs & Loops

var a = 10;
// window.alert(a);
a = window.prompt("Enter the a:")
//console.log("Prasam jain");
if (a)
    alert(a)
else
  console.log("False");

//for loop

for(var i=0;i<a;i++)   
  alert(i)

//while loop

while(i<3)
  {
     console.log("NO");
      i++;
  }
  
  
  
  
  
  