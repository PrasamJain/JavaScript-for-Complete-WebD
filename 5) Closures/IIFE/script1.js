//First we create a two JS file says - script1.js and script2.js
// if we use globle variable in both JS like

var name = "file1";
console.log(name);

// output is -
//     file2 :           b,coz "name" variable override by the file2

// but in both the file we craete a globle variable - name but they override each other
// so "name" is only one reference
//Now, instead of making globle, we make inside a funtion scope.

function print(){
    var name = "file1";
console.log(name);
}
print();
//here "name" is two references.

// Now, the output is : file1 then file2
//but we don't use globle variable at all. we can't handle it.
// So, we use IIFE - Immediately Invoked Function Expression : in this we don't give function as name 

(function(){
    var name = "file1";
    console.log(name);
})();

//IIFE is one time use function...we can't use two or more time