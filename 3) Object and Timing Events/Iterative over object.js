//itrating over objects...  (like in python)

var student = {
	name : "prasam", 
	rollNo: 189 , 
	marks: 95 , 
	sem : 5
};

// 1) using loop method

for(var x in student){
  //console.log(x);     //it iterate over keys...
  //console.log(student[x]);      // iterate only values
  console.log(x , student[x]);    //both keys : values
}

/ 
//2) also get all keys using "Object.keys()" function & pass obj 

var x = Object.keys(student);
console.log(x)   

//O["name","rollNo","marks","sem"]
