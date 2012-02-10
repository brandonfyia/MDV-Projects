/*
 	Brandon Sease
    ASD 02/12
    Project 2
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

    var storeData = function storeData(data) {
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

    var getJSON = function getJSON() {
        $("#json ul").empty();
        $.ajax({
            url: "xhr/data.json",
            type: "GET",
            dataType: "json",
            async: false,
            success:function(data){
                    for (var i=0, len=data.guns.length; i<len; i++) {
                        var obj = data.guns[i];
                        $("<li data-role='list-divider' data-theme='b'>"+ obj.gMake[1] +"</li>" +
                            "<p>"+ obj.gCat[1]+"</p>" +
                            "<p>"+ obj.gMake[1]+"</p>" +
                            "<p>"+ obj.gModel[1]+"</p>" +
                            "<p>"+ obj.gCal[1]+"</p>" +
                            "<p>"+ obj.notes[1]+"</p>").appendTo("#json ul");
                    };

            },
            error:function(data){
                alert("you messed up!");
                console.log(data);
            }
        });
    };
    $("#json").click(getJSON);

    //XML

    var getXML = function getXML() {
      $("#xml ul").empty();
        $.ajax({
            url: "xhr/data.xml",
            type: "GET",
            dataType: "xml",
            success:function(data){
                alert("you did good!");
                $(data).find("item").each(function(){
                    $("<li><h3>"+ $(this).find('gCat').text()+"</h3>" +
                        "<p>"+ $(this).find('gMake').text()+"</p>" +
                        "<p>"+ $(this).find('gModel').text()+"</p>" +
                        "<p>"+ $(this).find('gCal').text()+"</p>" +
                        "<p>"+ $(this).find('notes').text()+"</p></li>").appendTo("#xml ul");
                });
                $("xml ul").listview("refresh");
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
                alert("you did good!");
                console.log(data);
                var lineBrk = data.split("\n");
                for (var i=1,lb=lineBrk.length; i<lb; i++){
                    var rows = lineBrk[i];
                    var guns = rows.split(",");
                    console.log(guns[0]);
                    $("<li><h3>"+ guns[0]+"</h3>" +
                        "<p>"+ guns[1]+"</p>" +
                        "<p>"+ guns[2]+"</p>" +
                        "<p>"+ guns[3]+"</p>" +
                        "<p>"+ guns[4]+"</p></li>").appendTo("#csv ul");
                };
                $("csv ul").listview("refresh");

            },

            error:function(data){
                alert("dummy");
                console.log(data);
            }
        });
    };
    $("#csv").click(getCSV);

    //Get Image for correct cat.  !!! Using CSS Sprites !!!

    var getImg = function getImg(catName, makeSubList) {
        var pixels = 0;
        if (catName === "Revolver Pistol") {
            var pixels = 0;
        } else if (catName === "Semi-Auto Pistol") {
            var pixels = 80;
        } else if (catName === "Bolt Rifle") {
            var pixels = 160;
        } else if (catName === "Semi-Auto Rifle") {
            var pixels = 240
        } else if (catName === "Pump Shotgun") {
            var pixels = 320
        } else if (catName === "Auto-Loader Shotgun") {
            var pixels = 400
        }
        $("<img src='img/clear.gif'>").appendTo("#theList li:last").css("background", "url(img/master.gif) -"+pixels+"px 0px");
    };

    //Edit and Delete Functions

    var makeItemLinks = function makeItemLinks(key, makeLi) {
        var editLink = $("<a href='#addItem'>Edit Firearm</a>").appendTo("#theList li:last").css("display", "block");
        editLink;
        editLink.click(editItem());
        editLink.key = key;
        var deleteLink = $("<a href='#'>Delete Firearm</a>").appendTo("#theList li:last").css("display", "block");
        deleteLink;
        deleteLink.key = key;
        deleteLink.click(deleteItem());
    };

    var editItem = function editItem() {
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);
        $("#gCat").value = item.gCat[1];
        $("#gMake").value = item.gMake[1];
        $("#gModel").value = item.gModel[1];
        $("#gCal").value = item.gCal[1];
        $("#notes").value = item.notes[1];
        save.unbind("click", storeData());
        $("#submit").value = "Edit Firearm";
        var editSubmit = $("#submit").click(validate);
        editSubmit;
        editSubmit.key = this.key;
    };

    //Clear Items

    var clearLocal = function clearLocal() {
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

    var deleteItem = function deleteItem () {
        var ask = confirm("Are you sure you want to remove this Firearm?");
        if(ask) {
            localStorage.removeItem(this.key);
            window.location.reload();
        }else {
            alert("Firearm Saved.");
        }
    };
    $(".clear").click(clearLocal);
});

//Set Link & Submit Click Events
