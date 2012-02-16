/*
 	Brandon Sease
    ASD 02/12
    Project 3
*/

//Functions

$("#home").live("pageinit", function(){


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
        $.ajax({
            url: "xhr/data.json",
            type: "GET",
            dataType: "json",
//            async: false,
            success:function(data){
                    for (var i=0, len=data.guns.length; i<len; i++) {
                        var obj = data.guns[i];
                        getImg(obj.gCat[2], "#json ul li:last")
                        $("<li data-theme='b'><h3>"+ obj.gMake[1] + "</h3>" +
                            "<p>"+ obj.gCat[1]+"</p>" +
                            "<p>"+ obj.gMake[1]+"</p>" +
                            "<p>"+ obj.gModel[1]+"</p>" +
                            "<p>"+ obj.gCal[1]+"</p>" +
                            "<p>"+ obj.notes[1]+"</p></li>").appendTo("#json ul");
                    };
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

    var getXML = function () {
      $("#xml ul").empty();
        $.ajax({
            url: "xhr/data.xml",
            type: "GET",
            dataType: "xml",
            success:function(data){
                $(data).find("item").each(function(){
                    getImg($(this).find('img').text(), "#xml ul li:last")
                    $("<li data-theme='b'><h3>"+ $(this).find('gMake').text()+"</h3>" +
                        "<p>"+ $(this).find('gCat').text()+"</p>" +
                        "<p>"+ $(this).find('gMake').text()+"</p>" +
                        "<p>"+ $(this).find('gModel').text()+"</p>" +
                        "<p>"+ $(this).find('gCal').text()+"</p>" +
                        "<p>"+ $(this).find('notes').text()+"</p></li>").appendTo("#xml ul");
                });
                $("#xml ul").listview("refresh");
            },
            error:function(data){
                alert("you messed up again!");
                console.log(data);
            }
        });
    };
    $("#xml").click(getXML);

    var getCSV = function getCSV() {
        $("#csv ul").empty();
        $.ajax({
            url: "xhr/data.csv",
            type: "GET",
            dataType: "text",
            success:function(data){
                var lineBrk = data.split("\n");
                for (var i=1,lb=lineBrk.length; i<lb; i++){
                    var rows = lineBrk[i];
                    var guns = rows.split(",");
                    getImg(guns[5], "#csv ul li:last")
                    $("<li data-theme='b'><h3>"+ guns[1]+"</h3>" +
                        "<p>"+ guns[0]+"</p>" +
                        "<p>"+ guns[1]+"</p>" +
                        "<p>"+ guns[2]+"</p>" +
                        "<p>"+ guns[3]+"</p>" +
                        "<p>"+ guns[4]+"</p></li>").appendTo("#csv ul");
                };
                $("#csv ul").listview("refresh");

            },

            error:function(data){
                alert("dummy");
                console.log(data);
            }
        });
    };
    $("#csv").click(getCSV);

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
        } else if (catName === "Bolt Rifle") {
            var pixels = 160;
            console.log(catName, pixels);
        } else if (catName === "Semi-Auto Rifle") {
            var pixels = 240
            console.log(catName, pixels);
        } else if (catName === 5) {
            var pixels = 320
            console.log(catName, pixels);
        } else if (catName === 6) {
            var pixels = 400
            console.log(catName, pixels);
        }
        $("<img src='img/clear.gif'>").appendTo(id).css("background", "url(img/master.gif) -"+pixels+"px 0px");
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
