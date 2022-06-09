//   SQUARE - BRACKETS - NOTATION (access a data using this)

console.log(student["marks"]);     //95

//main difference in square brackets notation & dot(.) notation :- 

//if we define key "id" like this "-id": i.e hyphen or any other (#,%,$,&....etc) before name then it will not access through dot notation

//      student.-id = 10    //error
//instead we use square brackets notation like this -
student["-id"] = 10;



//we can pass object into functions also...

function display(obj , prop)
{
  alert(obj[prop]);      //here also we don't use dot notation.
}

display(student , "marks");

console.log(student);
