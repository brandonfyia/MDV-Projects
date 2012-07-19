/*
 Brandon Sease
 AVF 07/12
 Project 3
 */

var dismissed = function (){
    //no clue what to put here!
};

//Network
$("#net").live("pageshow", function(){

    var checkNetwork = function(){

        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = ' appear to be connected, but I have no idea how!';
        states[Connection.ETHERNET] = '\'re plugged into the wall via ethernet connection';
        states[Connection.WIFI]     = '\'re on a WiFi connection....Most likely your neighbors.';
        states[Connection.CELL_2G]  = '\'re on a cell 2G connection. Time for an upgrade!';
        states[Connection.CELL_3G]  = '\'re on a cell 3G connection';
        states[Connection.CELL_4G]  = '\'re on a cell 4G connection';
        states[Connection.NONE]     = ' dont have a connection!';

        alert('You' + states[networkState]);
    };

    $("#network").on("click", checkNetwork);
});

//Camera
$("#cam").live("pageshow", function(){

    var onPhotoSuccess = function(imageData){
        var image = document.getElementById("image");
        image.src = "data:image/jpeg;base64," + imageData;
        image.style.display = "block";
    };

    var onFail = function(message){
        alert('Failed because: ' + message);
    };

    var takePic = function(){
        navigator.camera.getPicture(onPhotoSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL});
    };

    $("#camera").on("click", takePic);
});

//Geo

var map;

$("#geo").live("pageshow", function(){

    var handleNoGeolocation = function (errorFlag){
        if (errorFlag) {
            var content = "Error: The Geolocation service failed.";
        } else {
            var content = "Error: Your browser doesn\'t support geolocation.";
        }
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
            alert("handleNoGeolocation false");
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

//Video
$("#vid2").live("pageshow", function(){
//    var video = document.getElementById('week2');
//    video.addEventListener('click',function(){
//        video.play();
//    },false);
    var play = function(){
      this.play();
    };

    $("#week2").on("click", play);
})