// globle scpoe

var name = "file2";
console.log(name);


// make funtion scope

function print2(){
    var name = "file2";
console.log(name);
}
print2();

//IIFE - make function expression instead of giving name to it

(function(){
    var name = "file2";
    console.log(name);
})();