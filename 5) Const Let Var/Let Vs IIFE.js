//using IIFE, make a variable "var fileName".The scope of this variable with in function i.e local/block scope.

(function(){
    var fileName = "file1";
    console.log(fileName);
})();

//Similarly, using "let" we make a block scope variable.
{
  let fileName = "file1";
  console.log(fileName);
}

/* both have same output : 
    file1
    file1
*/
