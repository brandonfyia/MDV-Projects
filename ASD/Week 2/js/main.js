/*
 	Brandon Sease
    ASD 02/12
    Project 2                       Re-Test!!!!!!!!
*/

//Functions

$(document).ready(function(){
	
	var mForm = $("#mainForm");
	mForm.validate({
		invalidHandler: function(form, validator){},
		submitHandler : function(){
			var data = mForm.serializeArray();
			console.log(data);
			storeData(data);
			}
		});
	

    
    function storeData(data) {
		if (!data.key) {
	        var id       = Math.floor(Math.random()*1000000001);
		} else {
			var id       = data.key;
		};
		console.log(item)
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
    
    //Get Items
    
    function getData() {
        if (localStorage.length === 0) {
            autoFillData();
			alert("No Firearms Saved Yet! So default data was added.")
            };
		$("<ul data-role='listview' data-filter='true' id='theList'></ul>").appendTo("#myList");
        for (var i=0, len=localStorage.length; i<len; i++) {
            var makeLi = $('<li></li>').appendTo("#theList");
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            makeLi;
			getImg(obj.gCat[1], makeLi);
			$("<h3>"+ obj.gModel[1] +"</h3>").appendTo("#theList li:last");
            for (var n in obj) {
                var optSubText = obj[n][0]+" "+obj[n][1];
                $("#theList li:last").append("<p>"+ optSubText +"</p>");
            };
//            makeItemLinks(localStorage.key(i), makeLi);
        };
	};
	
	//Get Image for correct cat.  !!! Using CSS Sprites !!!
	
	function getImg(catName, makeSubList) {
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
		};
		$("<img src='img/clear.gif'>").appendTo("#theList li:last").css("background", "url(img/master.gif) -"+pixels+"px 0px");
	};
	
	//AUTO FILL DATA
	function autoFillData() {
		for (var n in json) {
			var id = Math.floor(Math.random()*100000000000000);
			localStorage.setItem(id, JSON.stringify(json[n]));
		};
	};
		 
    
	//Edit and Delete Functions 
	
	function makeItemLinks(key, makeLi) {
		var editLink = $("<a href='#addItem'>Edit Firearm</a>").appendTo("#theList li:last").css("display", "block");
        editLink;
		editLink.addEventListener("click", editItem);
        editLink.key = key;
        var deleteLink = $("<a href='#'>Delete Firearm</a>").appendTo("#theList li:last").css("display", "block");
        deleteLink;
        deleteLink.key = key;
        deleteLink.addEventListener("click", deleteItem);
	};

	function editItem() {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		$("#gCat").value = item.gCat[1];
		$("#gMake").value = item.gMake[1];
		$("#gModel").value = item.gModel[1];
		$("#gCal").value = item.gCal[1];
		$("#notes").value = item.notes[1];
		save.removeEventListener("click", storeData);
		$("#submit").value = "Edit Firearm";
		var editSubmit = $("#submit").click(validate);
		editSubmit;
		editSubmit.key = this.key;
	};
		
    //Clear Items
    
    function clearLocal() {
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
			};
        };
    };
    
	function deleteItem () {
		var ask = confirm("Are you sure you want to remove this Firearm?");
		if(ask) {
			localStorage.removeItem(this.key);
			window.location.reload();
		}else {
			alert("Firearm Saved.");
		};
	};
//Set Link & Submit Click Events
    
       $("#displayLink1").click(getData);
	   $("#displayLink2").click(getData);
	   $("#displayLink3").click(getData);
	   $("#displayLink4").click(getData);
	   $("#displayLink5").click(getData);
	   $("#displayLink6").click(getData);
	   $("#displayLink7").click(getData);
	   $("#displayLink8").click(getData);
	   $("#displayLink9").click(getData);
       $("#clear1").click(clearLocal);
       $("#clear2").click(clearLocal);


    // Variable Defaults
    

});