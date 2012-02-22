/*
 	Brandon Sease
    ASD 02/12
    Project 4
*/

//Functions

$("#home").live("pageshow", function(){


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

$("#display").live("pageshow", function(){

//TODO get .couch.db working

    var getList = function () {
        $("#list ul").empty();
        $.ajax({
            url: "_view/guns",
            type: "GET",
            dataType: "json",
            success:function(data){
                $.each(data.rows, function(index, gun){
                    var gCat= gun.value.gCat;
                    var gMake= gun.value.gMake;
                    var gModel= gun.value.gModel;
                    var gCal= gun.value.gCal;
                    var notes= gun.value.notes;
//                        getImg(gCat[2], "#list ul li:last");
                        $("<li><a href='view.html?gCat="+gCat[1]+"&gMake="+gMake[1]+"&gModel="+gModel[1]+"&gCal="+gCal[1]+"&notes="+notes[1]+" ' data-icon='arrow-r' data-iconpos='right' data-theme='b'>"+ gModel[1] + "</a></li>").appendTo("#list ul");
                    });
                $("#list ul").listview("refresh");
            },
            error:function(data){
                alert("you messed up!");
                console.log(data);
            }
        });
    };
    $("#list").click(getList);

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
            var pixels = 240;
            console.log(catName, pixels);
        } else if (catName === 5) {
            var pixels = 320;
            console.log(catName, pixels);
        } else if (catName === 6) {
            var pixels = 400;
            console.log(catName, pixels);
        };
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

//TODO create detailed view page !!! style like project 4 video

    var gun = urlVars();
    $("<li><h3>"+gun["gCat"]+"</h3>" +
        "<p>"+gun["gMake"]+"</p>" +
        "<p>"+gun["gModel"]+"</p>" +
        "<p>"+gun["gCal"]+"</p>" +
        "<p>"+gun["notes"]+"</p></li>").appendTo("#eView");
    $("#wView").listview("refresh");

});


//Set Link & Submit Click Events
//TODO create functionality
//TODO delete functionality
//TODO update functionality
