//In this file we learn about the Prapogation of events...

var outer = document.getElementById('outer');
outer.addEventListener('click',function(){
  console.log('outer div click');
});

//whenever we click on outer div its Run.
//But when we click on the inner div it shows two msg.
//one for inner and another for outer b,coz inner div is a part of outer div.

var inner = document.getElementById('inner');
inner.addEventListener('click',function(){
  console.log("Inner div click");
});

//Heirarchy of execution of events...
/*          Document
                ^
                |
            Outer Div   <---second this run
                ^
                |
            Inner Div   <---first this run
*/

//Now add Event to document also- click any where.

document.addEventListener('click',function(){
  console.log("document click");
});

//STOP Propogation to event.
// pass 'event' to function and then use event.stopPropagation().

var inner = document.getElementById('inner');
inner.addEventListener('click',function(event){
  console.log("Inner div click");
  event.stopPropagation();
});