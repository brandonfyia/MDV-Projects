/*
 Brandon Sease
 AVF 05/12
 Project 2
 */

//Geo Function

$("#geo").live("pageshow", function(){

    var didGood = function(position){
        alert("it works!");
        var myOptions = {
            center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude ),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map($("#map_canvas"),
            myOptions);
    }
    var didBad = function(error){
        alert("error code: "+ error.code + "<br />" +
              "error message: " + error.message)
    };
    var getGeo = function (){
        navigator.geolocation.getCurrentPosition(didGood, didBad);
    };
    $("#find").on("click", getGeo);
});
