// DELETION property from OBJECT...   using "delete" keyword

delete student["-id"];
console.log(student);


// like C++, JS are also make obj as a referece
//if we create a another obj like that

var obj = student;

/*                    +----------+
   obj  -------->     | marks    |    <------- student
                      | name     |
                      | sem..etc |
                      +----------+
*/
//it means obj are also pointing to student.
//if we update property of any one of object then another also updated them.

obj.marks = 80;

/*   COMPARE two objects     */
obj == student     //true because it compare the location of objects i.r address pointing to it
obj === student    //true


