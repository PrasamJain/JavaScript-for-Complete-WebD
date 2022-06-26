
// THIS IS OUR JavaScript FILE FOR FETCHING ELEMENTS OF HTML and WE IMPORT THIS FILE UNDER HTML FILE


// now for fetching perticular element we fetch using by id or class in html

// 1)Object Fetch by id
console.log(document.getElementById("one"));  //element of first h1 tag

// OutPut is :- <h1 id="one"> hello </h1>

// Now, save this to variabel and give to style using JS.
var heading = document.getElementById("one");
heading.style.color = "#ffff";     // give color also in hex-Dec
heading.style.backgroundColor = 'black';

// 2)Object Fetch by their tag name like h1,h2....h6 , p1 , div, spam etc

var tag = document.getElementsByTagName('h1');
//you can change style of all h1 at same time

console.log(tag);
// output : it makes the objects of tags i.e first h1 at index 0, second h1 at index 1

tag[1].style.color = 'blue';
tag[0].innerText = 'Prasam jain';     //change heading text.

// 3) Object Fetch by class

var byclass = document.getElementsByClassName("para");
byclass[0].style.color = "tomato";

// 4) fetch using selectors i.e for id : '#', class : '.'

var heading1 = document.querySelector('#one');
heading1.style.color = "red";
var para = document.querySelector('.para');     //in case of class we take first matching result.
para.style.color = "red";
