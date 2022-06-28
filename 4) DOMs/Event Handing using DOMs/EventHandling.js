//  EVENT HANDLING... 
//  mouse click, key press, loading, hover ...etc

//First method is when mouse button click - it shows alert dialoge using : onclick method
// <button id="btn" onclick= "alert('Say hello!!')" > Mouse event </button>

// second method via Js using "event listener":
// step 1- fetch variable using id

var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');

//step 2- Add event Listener on button
// Syntax : addEventListener(event_name , funcName_perform)
// event name = click 
// and we define funtion that have to be perform and then use it

function alerts(){
  alert("2nd method for button 1");
}

button1.addEventListener('click' , alerts);

//OR directly use 

button2.addEventListener('click' , function(){
  alert("2nd method for button 2");
});
                        
// Note : We can use JS directly inside html (i.e after create button at the end of html body we use by <script> tag) called inline Js (like inline css) , 
// but in this method we use external js File.
