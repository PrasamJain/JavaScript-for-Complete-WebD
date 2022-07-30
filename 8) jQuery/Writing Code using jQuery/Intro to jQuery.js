// If you want to change the text of html, two methods :-
// Using normal JS Doms - 

    var p = document.getElementById('para1');
    var para2 = document.getElementById('para2');

    p.innerHTML = "welcome";


//Using jQuery - You must add "jQuery-3.6.0.js" file (already provided !!) befor main_script.js

// First we fetch the element and change the text - For Fetching use : $ (dollor) then pass #id then html('text').

    $('#para1').text('Welcome!!');

/*  working of jQuery is something like that :- where dollor is the function and we pass the query then search in html file-

    function $(query)        // query is id or class.....
    {
        return document.querySelector(query);
    }
*/

//    $('#para1').hide();   //for hiding paragraph.
    var w = $('#para2').width();   // if you don't pass width size then it fetch the current width
    $('#para2').width(100);     //it set 100px
    $('#para2').height(200);

// If you select oll the p tags of h1 h2 ..... tags of any tags then -
    $('p').html("change all p tags");

    var paras = $('p').html('changed!');   //fetch all the p tags
    // In all the paras, if you want to fetch perticular p tags then
    //var p1 = paras.eq(0);     // pass index of that para, and it return jQuery object to p1 
    // p1.html('perticular changed');

    // we can also use - 
    var p2 = paras[1];    // but it will return DOMs object not jQuery Object.
    // you convert doms obj to jQuery obj - $(obj)
    var x = $(p2);
    x.html('perticular changed doms obj');
