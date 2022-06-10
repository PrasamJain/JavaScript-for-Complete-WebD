/* NESTED OBJECT       */

// here student is outer Object and inside student - "address" is inner Object.

var student = 
    {
      name : "prasam", 
      rollNo: 189 , 
      marks: 95,
      address : {city: "guna", state: "MP", PIN: 473226}      //inner Object
    };

//access porperties of nested Object using various ways :- 

      student.address.state         	  // MP
      student.address["state"]        // MP
      student["address"].state         // MP
      student["address"]["state"]         // MP
