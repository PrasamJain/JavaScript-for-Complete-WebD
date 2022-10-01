function fetchRandomPic(){
  
    // create a http request then open it
    var xhrRequest = new XMLHttpRequest();
    
    xhrRequest.onload = function(){
      console.log(xhrRequest.response);     //json formate string

        // string OUTPUT :  {"message":"https:\/\/images.dog.ceo\/breeds\/whippet\/n02091134_10618.jpg","status":"success"}
      
      //to convert string into json object bcoz we only need msg : API part

      var responseJson = JSON.parse(xhrRequest.response);
      var imageURL = responseJson.message;

      // now return the img url to html page 

      $('#image').attr('src', imageURL);    //set the src with image url

    };
    
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random' , true);
    //pass the get function and API link and boolean for true-async/false-sync
    
    //send the request
    xhrRequest.send();
    
    
  }
  
  $("#btn").click(fetchRandomPic);