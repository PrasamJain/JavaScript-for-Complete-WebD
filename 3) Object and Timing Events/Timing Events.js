// with the help Object timing events in JS we execute functions in different intervals of time

// 1) setTimeout(func_name , time (ms))      appeare after certain time

console.log("0sec");

function display(){
  alert("after 4 5 sec this will display");
}

setTimeout(display , 5000);

// 2) setInterval(func_name , interval(ms)) 

//setInterval(display , 3000);      // repeat after every 3 sec

var min = 0;
var sec = 1;
var hr = 0;
function time(){
  console.log(hr,min,sec);
  sec++;
  if(sec == 61)
   {
     sec = 1;
     min++;
     if(min == 61)
     {
       min = 1;
       hr++;
     }
   }
}

//setInterval(time , 10);

//  3) clearInterval(instance)       -  to stop the timer

var sec = 1;
function time(){
  console.log(sec);
  sec++;
  if(sec == 61)   //we clear or stop the timer after 60 sec
  {
    clearInterval(id);    //pass the instance 
  }
}

var id = setInterval(time , 100);
