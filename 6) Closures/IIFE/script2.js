// globle scpoe

var fileName = "file2";
console.log(fileName);


// make funtion scope

function print2(){
    var fileName = "file2";
console.log(fileName);
}
print2();

//IIFE - make function expression instead of giving name to it

(function(){
    var fileName = "file2";
    console.log(fileName);
})();
