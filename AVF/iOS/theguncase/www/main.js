/*
 Brandon Sease
 AVF 07/12
 Project 3
 */

var dismissed = function (){
    //no clue what to put here!
};

//Geo

var map;

$("#geo").live("pageshow", function(){

    var handleNoGeolocation = function (errorFlag){
        alert("function started");
        if (errorFlag) {
            var content = "Error: The Geolocation service failed.";
        } else {
            var content = "Error: Your browser doesn\'t support geolocation.";
        }
        alert("still going");
        var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
    };

    var getGeo = function(){

        var didGood = function(position){
            navigator.notification.alert("I found you! You're at "+position.coords.latitude+" and "+position.coords.longitude+"!", dismissed, "Hurray!", "OK");
        };

        var didBad = function(){
            navigator.notification.alert("I have no idea where you are.", dismissed, "Uh Oh...", "Sigh");
        };

        navigator.geolocation.getCurrentPosition(didGood, didBad);

        var myOptions = {
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

                var infowindow = new google.maps.InfoWindow({
                    map: map,
                    position: pos,
                    content: 'Location found using HTML5.'
                });

                map.setCenter(pos);

            }, function(){
                handleNoGeolocation(true);
            });
        } else {
            handleNoGeolocation(false);
        }
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
        navigator.notification.alert("Your position is: X:"+
            acceleration.x +", Y:"+
            acceleration.y +", Z:"+
            acceleration.z +"!",
            dismissed, "Woah!", "Awesome");
    };
    var didBad = function (){
        navigator.notification.alert("Error!", dismissed, "uh oh!", "Bummer");
    };
    var accel = function (){
        navigator.accelerometer.getCurrentAcceleration(didGood, didBad);
    };
    $("#accel").on("click", accel);
});