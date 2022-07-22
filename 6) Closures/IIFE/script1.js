//First we create a two JS file says - script1.js and script2.js
// if we use globle variable in both JS like

var fileName = "file1";
console.log(fileName);

// output is -
//     file2 :           b,coz "fileName" variable override by the file2

// but in both the file we craete a globle variable - 'fileName' but they override each other
// so "fileName" is only one reference
//Now, instead of making globle, we make inside a funtion scope.

function print(){
    var fileName = "file1";
console.log(fileName);
}
print();
//here "fileName" is two references.

// Now, the output is : file1 then file2
//but we don't use globle variable at all. we can't handle it.
// So, we use IIFE - Immediately Invoked Function Expression : in this we don't give function as name 

(function(){
    var fileName = "file1";
    console.log(fileName);
})();

//IIFE is one time use function...we can't use two or more time
