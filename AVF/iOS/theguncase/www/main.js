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
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var myOptions = {
            center: new google.maps.LatLng(lat, long),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        navigator.notification.alert("You are at "+lat+" "+long, dismissed, "It works!", "Awesome");
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
        navigator.notification.alert("Your position is: "+
            acceleration.x +" "+
            acceleration.y +" "+
            acceleration.z +" "
            ,  "Woah!", "Awesome");
    };
    var didBad = function (){
        navigator.notification.alert("Error!", dismissed, "uh oh!", "Bummer");
    };
    var accel = function (){
        navigator.accelerometer.getCurrentAcceleration(didGood, didBad);
    };
    $("#accel").on("click", accel);
});