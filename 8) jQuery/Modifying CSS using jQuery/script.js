// we have to change the color of paragraph tags using jQuery. " .css() is a function "

$('#para1').css('color' , 'red'); 
/*                  ^       ^
                    |       |
                Property   value
*/

$('#para2').css('fontSize' , '30px');
$('p').css('margin' , '20px');      //change the margin of all the p tags

//we pass multiple values like -
$('p').css({
    padding : "20px",
    height : "100px"
});

$('div').css({     //give the multiple css properties to div
    border: "2px solid black",
    backgroundColor: "cyan",
    width: "100px",
    height: "100px"
});


// TRY ONCE YOURSELF !!
// THANK YOU