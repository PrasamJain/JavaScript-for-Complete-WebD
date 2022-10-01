function fetchRandomPic(){
    // create the same request using jquery

    // $.ajax({
    //     url: "https://dog.ceo/api/breeds/image/random",
    //     method: 'get',
    //     success: function(data){
    //         // var responseJson = JSON.parse(xhrRequest.response);      //can't write this statement
    //         var imageURL = data.message;

    //         // now return the img url to html page 

    //         $('#image').attr('src', imageURL);    //set the src with image url

    //     }
    // });



    // another one line method is :- get(pass url , success function) 

    $.get("https://dog.ceo/api/breeds/image/random" , function(data){
        var imageURL = data.message;
        $('#image').attr('src', imageURL);

    });

}



  $("#btn").click(fetchRandomPic);