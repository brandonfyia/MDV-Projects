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
    $("#json").click(getJSON);

    var getJSON = function getJSON() {
        $.ajax({
            url: "xhr/data.json",
            type: "GET",
            dataType: "json",
            success:function(data){
                console.log(data);
                getData(data);
            },
            error:function(data){
                alert("you messed up!");
                console.log(data);
            }
        });
    };

    //XML
    $("#xml").click(getXML);

    var getXML = function getXML() {
        $.ajax({
            url: "xhr/data.xml",
            type: "GET",
            dataType: "xml",
            success:function(data){
                console.log(data);
            },
            error:function(data){
                alert("you messed up again!");
                console.log(data);
            }
        });
    };


    var getData = function getData(data) {
//        if (localStorage.length === 0) {
//            autoFillData();
//			alert("No Firearms Saved Yet! So default data was added.")
//            };
        for (var i=0, len=data.length; i<len; i++) {
            var makeLi = $('<li></li>').appendTo("#theList");
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = data[0];
            makeLi;
            getImg(obj.gCat[1], makeLi);
            $("<h3>"+ obj.gModel[1] +"</h3>").appendTo("#theList li:last");
            for (var n in obj) {
                var optSubText = obj[n][0]+" "+obj[n][1];
                $("#theList li:last").append("<p>"+ optSubText +"</p>");
            }
        }
        $('.itemList').listview('refresh');
    };

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
