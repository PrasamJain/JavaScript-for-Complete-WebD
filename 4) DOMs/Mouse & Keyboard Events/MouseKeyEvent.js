                      //MOUSE & KEY BOARD EVENTS
// Their are two mouse events - mouse over and mouse out

var outerdiv = document.getElementById('outer');

outerdiv.addEventListener('mouseover', function(){
                       console.log("Mouse Over")
});

// In "mouseover" whenever we hover on box, the function will be call.

outerdiv.addEventListener('mouseout', function(){
                       console.log("Mouse Out")
});

// In "mouseover" whenever we hover on box and take cursur out of the box, the function will be call.

                 //KEYBOARD EVENTS

//key press event - whenever we typing any key, the function will be call.

var inputtext = document.getElementById('search');
inputtext.addEventListener('keypress', function(){
                       console.log("Key pressed");
});

// if we press key any where in screen then function call.
document.addEventListener('keypress', function(){
                     console.log("any where Key pressed");
});

// Note : keypress doesn't detect up, down, arrow keys or tab, ctrl, shift, alt, Fn, left , right, etc keys

// two another keyboard event is "key down" and "key up"
//key down - press the key and , key up - relese the key.
// keypress is the combination of keydown and keyup 

document.addEventListener('keydown', function(){
                     console.log("key down event");
});

// kwy down & key up detect all keys including arrows, shift, ctrl, alt etc.
document.addEventListener('keyup', function(){
                     console.log("key up event");
});

//Identify which key have been pressed by passing "event" to function and using 'event.keyCode'
document.addEventListener('keyup', function(event){
                     console.log("key identify", event.keyCode);
});

//keyCode give the ascii value of character pressed.
//output: "key identify" 65
