// DOMS - Document Object model
/*
    Their are different-different objects are present in documents and Windows and many more...
    like -
    
      DOCUMENT: corresponding to HTML
      
            document.head
            document.body
            document.documentElements
            document.location
            
      WINDOW:
      
            window.alert          //for notification
            window.screen         //deals with heigth,width etc
            window.location       // to get the current page URL
            window.document       // this will access the above document
            " NOTE : document OR window.document are same " 
*/

console.log(window.document == document);    //true
console.log(window.location == document.location);    //true

function test()
{
  return this;
}

console.log(test() == window);     //true
// inside f test(), 'this' returns the window object i.e equal to window. 
