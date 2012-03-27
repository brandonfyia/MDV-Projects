/*
 	Brandon Sease
    ASD 02/12
    Project 4
*/

//Functions

$("#home").live("pageshow", function(){

    $.couch.login({
        name: "thenesearinholdisidlight",
        password: "F7MOEpkRTf7SG1cfHtCKAIkd",
        success: function(data) {
            console.log(data);
        },
        error: function(status) {
            console.log(status);
        }
    });

});

$("#addItem").live("pageshow", function(){

    var mForm = $("#mainForm");
    mForm.validate({
        invalidHandler: function(form, validator){},
        submitHandler : function(){
            var data = mForm.serializeArray();
            console.log(data);
            storeData(data);
        }
    });

    var storeData = function (data) {
        var gCat    = data[0].value;
        var gMake   = data[1].value;
        var gModel  = data[2].value;
        var gCal    = data[3].value;
        var notes   = data[4].value;
        var doc = {
            "_id": "Gun:"+gModel,
            "gCat": [
                "Gun Type: ",
                gCat
            ],
            "gMake": [
                "Gun Make: ",
                gMake
            ],
            "gModel": [
                "Gun Model: ",
                gModel
            ],
            "gCal": [
                "Caliber: ",
                gCal
            ],
            "notes": [
                "Notes: ",
                notes
            ]
        };
        var makeID = "Gun:"+gModel;
        console.log(makeID);
        $.couch.db("asdproject2").openDoc(makeID, {
            success: function(gun) {
                console.log(gun);
                $.couch.db("asdproject2").removeDoc(gun, {
                    success: function(data) {
                        console.log("old save deleted");
                        $.couch.db("asdproject2").saveDoc(doc, {
                            success: function(data) {
                                console.log("gun saved!", data);
                                alert(gMake+" "+gModel+" saved.");
                                $.mobile.changePage("#display");
                            },
                            error: function(status) {
                                console.log("you messed up!", status);
                            }
                        });

                    },
                    error: function(data) {
                        alert("Nooooope!")
                        console.log(data);
                    }
                })
            },
            error: function(gun){
                $.couch.db("asdproject2").saveDoc(doc, {
                    success: function(data) {
                        console.log("gun saved!", data);
                        alert(gMake+" "+gModel+" saved.");
                        $.mobile.changePage("#display");
                    }
                })
            }
        });
    };
});

$("#display").live("pageshow", function(){

    var getList = function () {
        $("#list ul").empty();
        $.couch.db("asdproject2").view("app/guns", {
            success:function(data){
                $.each(data.rows, function(index, gun){
                    var gCat= gun.value.gCat;
                    var gMake= gun.value.gMake;
                    var gModel= gun.value.gModel;
                    var gCal= gun.value.gCal;
                    var notes= gun.value.notes;
                    var getI = getImg(gCat[2])
//                        getImg(gCat[2], "#list ul li:last");
                        $("<li><a href='view.html?gCat="+gCat[1]
                            +"&gMake="+gMake[1]
                            +"&gModel="+gModel[1]
                            +"&gCal="+gCal[1]
                            +"&notes="+notes[1]
                            +" ' data-icon='arrow-r' data-iconpos='right' data-theme='b'>"
                            + gModel[1] + "</a></li>").appendTo("#list ul");
                    });
                $("#list ul").listview("refresh");
            },
            error:function(data){
                alert("you messed up!");
                console.log(data);
            }
        });
    };
     $("#list").on('click', getList);

    //Get Image for correct cat.  !!! Using CSS Sprites !!!
    //TODO ask Ms. Dawson about this.
    var getImg = function (catName, id) {
        var pixels = 0;
        if (catName === "Revolver Pistol") {
            var pixels = 0;
            console.log(catName, pixels);
        } else if (catName === "Semi-Auto Pistol") {
            var pixels = 80;
            console.log(catName, pixels);
        } else if (catName === "Bolt Rifle") {
            var pixels = 160;
            console.log(catName, pixels);
        } else if (catName === "Semi-Auto Rifle") {
            var pixels = 240;
            console.log(catName, pixels);
        } else if (catName === "Pump Shotgun") {
            var pixels = 320;
            console.log(catName, pixels);
        } else if (catName === "Auto-Loader Shotgun") {
            var pixels = 400;
            console.log(catName, pixels);
        };
        return($("<img src='clear.gif'>").appendTo(id).css("background", "url(master.gif) -"+pixels+"px 0px"));
    };

});

var urlVars = function(){
    var urlData = $($.mobile.activePage).data("url");
    var urlParts = urlData.split("?");
    var urlPairs = urlParts[1].split("&");
    var urlValues = {};
    for (var pair in urlPairs ) {
        var keyValue = urlPairs[pair].split("=");
        var key = decodeURIComponent(keyValue[0]);
        var value = decodeURIComponent(keyValue[1]);
        urlValues[key] = value;
    }
    return(urlValues);
};

$("#view").live("pageshow", function(){

    var gun = urlVars()["gModel"];
    console.log(gun);
    var makeID = "Gun:"+gun;
    console.log(makeID);
    $.couch.db("asdproject2").openDoc(makeID, {
        success: function(gun) {
            console.log(gun);
            $("<li><h2>Category: "+gun["gCat"][1]+"</h2></li>" +
                "<li><h3>Make: "+gun["gMake"][1]+"</h3></li>" +
                "<li><h3>Model: "+gun["gModel"][1]+"</h3></li>" +
                "<li><h3>Caliber: "+gun["gCal"][1]+"</h3></li>" +
                "<li><h3>Notes: "+gun["notes"][1]+"</h3></li>").appendTo("#eView");
            $("#eView").listview("refresh");
            $('#delete').live('click', function(){
                    var ask=confirm("Are you sure you want to delete this firearm?");
                    if (ask==true) {
                        $.couch.db("asdproject2").removeDoc(gun, {
                            success: function(data) {
                                console.log(data);
                                alert("Firearm Deleted!");
                                $.mobile.changePage("index.html#display");
                            },
                            error: function(data) {
                                alert("Delete Failed.")
                                console.log(data);
                            }
                        });
                    } else {
                        alert("Firearm Still Saved!");
                    };
            });
            $("#edit").live("click", function(){
                $.mobile.changePage("index.html#addItem");
                console.log(gun);
                $("#gCat").val(gun["gCat"][1]);
                $("#gMake").val(gun["gMake"][1]);
                $("#gModel").val(gun["gModel"][1]);
                $("#gCal").val(gun["gCal"][1]);
                $("#notes").val(gun["notes"][1]);
            })

        },
        error:function(data){
            alert("you messed up!");
            console.log(data);
        }

    });


});

