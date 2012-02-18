/*
 	Brandon Sease
    ASD 02/12
    Project 4
*/

//Functions

$("#home").live("pageinit", function(){

    $("#itemList").listview("refresh");

});

$("#addItem").live("pageinit", function(){

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
        if (!data.key) {
            var id       = Math.floor(Math.random()*1000000001);
        } else {
            var id       = data.key;
        }
        console.log(item);
        var item         = {};
        item.gCat    = ["Gun Type:", data[0].value];
        item.gMake   = ["Gun Make:", data[1].value];
        item.gModel  = ["Gun Model:", data[2].value];
        item.gCal    = ["Caliber:", data[3].value];
        item.notes   = ["Notes:", data[4].value];
        console.log(item);
        localStorage.setItem(id, JSON.stringify(item));
        alert(item.gMake[1]+" "+item.gModel[1]+" saved.");
    };
});

$("#display").live("pageinit", function(){

    //Get Items

    //JSON

    var getJSON = function () {
        $("#json ul").empty();
        $.couch.db("asdproject2.").view("plugin/guns", {
            success:function(data){
                $.each(data.rows, function(index, gun){
                    console.log(gun);
                    var gCat= gun.value.gCat;
                    var gMake= gun.value.gMake;
                    var gModel= gun.value.gModel;
                    var gCal= gun.value.gCal;
                    var notes= gun.value.notes;
                        getImg(gCat[2], "#json ul li:last")
                        $("<li data-theme='b'><h3>"+ gMake[1] + "</h3>" +
                            "<p>"+ gCat[1]+"</p>" +
                            "<p>"+ gMake[1]+"</p>" +
                            "<p>"+ gModel[1]+"</p>" +
                            "<p>"+ gCal[1]+"</p>" +
                            "<p>"+ notes[1]+"</p></li>").appendTo("#json ul");
                    });
                $("#json ul").listview("refresh");
            },
            error:function(data){
                alert("you messed up!");
                console.log(data);
            }
        });
    };
    $("#json").click(getJSON);

    //XML



    //Get Image for correct cat.  !!! Using CSS Sprites !!!
    //TODO ask Ms. Dawson about this.
    var getImg = function (catName, id) {
        var pixels = 0;
        if (catName === 2) {
            var pixels = 0;
            console.log(catName, pixels);
        } else if (catName === 1) {
            var pixels = 80;
            console.log(catName, pixels);
        } else if (catName === 3) {
            var pixels = 160;
            console.log(catName, pixels);
        } else if (catName === 4) {
            var pixels = 240
            console.log(catName, pixels);
        } else if (catName === 5) {
            var pixels = 320
            console.log(catName, pixels);
        } else if (catName === 6) {
            var pixels = 400
            console.log(catName, pixels);
        }
        $("<img src='clear.gif'>").appendTo(id).css("background", "url(master.gif) -"+pixels+"px 0px");
    };

    //Clear Items

    var clearLocal = function () {
        if(localStorage.length === 0) {
            alert("No Firearms Saved.");
        } else {
            var ask = confirm("Are you sure you want to remove ALL firearms?");
            if(ask) {
                localStorage.clear();
                $.mobile.changePage($("#home"), { transition: "pop"});
                alert("All Firearms Cleared");
                return false;
            }else {
                alert("Firearms Still Saved.");
            }
        }
    };
//    //Edit and Delete Functions
//
//    var editLink = $("<a>");
//    editLink.attr({
//        "data-role": "button",
//        "data-icon": "alert",
//        "data-iconpos": "right",
//        "href": "#addItem"
//    });
//    //editLink.key = key;
//    var editText = "Edit Firearm";
//    editLink.bind("click", {key: key}, function editItem(){



    $(".clear").click(clearLocal);
});

//Set Link & Submit Click Events
