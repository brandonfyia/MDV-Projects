/*
 Brandon Sease
 AVF 05/12
 Project 2
 */

//Geo Function

$("#geo").live("pageshow", function(){
    var didGood = function(position){
        alert("You are at:"+position)
    };
    var didBad = function(error){
        alert("error code: "+ error.code + '/n'+
              "error message: " + error.message + "/n")
    };
    var getGeo = function (){
        navigator.geolocation.getCurrentPosition(didGood, didBad);
    };
    $("#find").on("click", getGeo);
});
