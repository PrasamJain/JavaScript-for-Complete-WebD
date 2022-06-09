//object in Js are like dictionary in python
// Objects are mutable.
//created with curly brakects { }.
// collection of "Keys - value" pair.

var student = {name : "prasam", rollNo: 189 , marks: 95};

//Here Keys are in string .

console.log(student);

/*   OUTPUT     
[object Object]
{
  "name": "prasam", 
  "rollNo": 189,
  "marks": 95
}
*/

//create this way also
/*    var obj = new Object(); */ 

// If we access properties of object.
console.log(student.rollNo);       //189
console.log(student.name);         //"prasam"
console.log(student.marks);        //95

//we can add more properties to object

student.sem = "5th";
console.log(student.sem);        //"5th"

console.log(student.id);
// undefined
