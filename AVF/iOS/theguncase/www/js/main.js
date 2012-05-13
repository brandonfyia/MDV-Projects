/*
 Brandon Sease
 AVF 05/12
 Project 2
 */

var dismissed = function (){
    //no clue what to put here!
};

//Geo

$("#geo").live("pageshow", function(){

    var didGood = function(position){
        var myOptions = {
            center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude ),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        var map = new google.maps.Map($("#map_canvas"), myOptions);
        navigator.notification.alert("You are at "+position.coords.latitude+" "+position.coords.longitude, dismissed, "It works!", "Awesome");
    };
    var didBad = function(error){
        alert("error code: "+ error.code + "<br />" +
            "error message: " + error.message)
    };
    var getGeo = function (){
        navigator.geolocation.getCurrentPosition(didGood, didBad);
    };
    $("#find").on("click", getGeo);
});

//Notifications

$("#notes").live("pageshow", function(){
    var alert = function (){
        navigator.notification.alert("You have been notified!", dismissed, "Congratulations!", "Awesome");
    };
    $("#alert").on("click", alert);
    var beep = function (){
        navigator.notification.beep(2);
    };
    $("#beep").on("click", beep);
    var vibrate = function (){
        navigator.notification.vibrate();
        navigator.notification.vibrate(1000);
    };
    $("#vibrate").on("click", vibrate);
});

//Accelerometer
$("#acc").live("pageshow", function(){
    var didGood = function(acceleration){
        alert("it works!");
        alert("Your position is: "+
            acceleration.x +
            acceleration.y +
            acceleration.z );
//            , dismissed, "Woah!", "Awesome");
    };
    var didBad = function (){
        navigator.notification.alert("Error!", dismissed, "uh oh!", "Bummer");
    };
    var accel = function (){
        navigator.accelerometer.getCurrentAcceleration(didGood, didBad);
    };
    $("#accel").on("click", accel);
});