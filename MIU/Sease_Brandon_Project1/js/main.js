/*
 	Brandon Sease
    MIU 11/12
    Project 1&2
*/


//Functions

window.addEventListener("DOMContentLoaded", function() {
    
    //Get element by ID function
    
    function $(x) {
        var element = document.getElementById(x);
        return element;
    };
    

    //Create Select field Element
    
    function makeCats() {
        var formTag = document.getElementsByTagName("form"),
            selectLi = $("select"),
            makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "gCat");
        for(var i=0, j=gCats.length; i<j; i++) {
          var makeOption = document.createElement("option");
          var optText = gCats[i];
          makeOption.setAttribute("value", optText);
          makeOption.innerHTML = optText;
          makeSelect.appendChild(makeOption);
        };
        selectLi.appendChild(makeSelect);
    };
    // Toggel Controles
    
    function toggleControls(n){
        switch(n) {
            case "on":
                $("add").style.display = "none";
                $("clear").style.display = "inline";
                $("displayLink").style.display = "none";
                $("addNew").style.display = "inline";
                break;
            case "off":
                $("add").style.display = "block";
                $("clear").style.display = "inline";
                $("displayLink").style.display = "inline";
                $("addNew").style.display = "none";
                $("items").style.display = "none";
                break;
            default:
            return false;
		};    
    };
    
    //Store Items    
    
    function storeData(key) {
		if (!key) {
	        var id           = Math.floor(Math.random()*1000000001);
		} else {
			id = key;
		};
        var item         = {};
            item.gCat    = ["Gun Type:", $('gCat').value];
            item.gMake   = ["Gun Make:", $('gMake').value];
            item.gModel  = ["Gun Model:", $('cash').value];
            item.gCal    = ["Caliber:", $('percent').value];
            item.notes   = ["Notes:", $('notes').value];
        localStorage.setItem(id, JSON.stringify(item));
        alert(item.gMake[1] + " saved");
    };
    
    //Get Items
    
    function getData() {
        toggleControls("on");
        if (localStorage.length === 0) {
            autoFillData();
			alert("No Firearms Saved Yet! So default data was added.")
            window.location.reload();
            };
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $("items").style.display = "block";
        for (var i=0, len=localStorage.length; i<len; i++) {
            var line = document.createElement("hr");
			var makeli = document.createElement("li");
			var linksLi = document.createElement("li");
			makeli.style.listStyleType = "none";
			makeList.appendChild(line);
            makeList.appendChild(makeli);
			makeli.style.marginBottom = "10px";
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeli.appendChild(makeSubList);
            getImg(obj.gCat[1], makeSubList);
			for (var n in obj) {
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
				makeSubli.style.listStyleType = "none";
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
            };
			makeItemLinks(localStorage.key(i), linksLi);
        };
    };
	
	//Get Image for correct cat.  !!! Using CSS Sprites !!!
	
	function getImg(catName, makeSubList) {
		var pixels = 0;
		if (catName === "Ear") {
			var pixels = 0
		} else if (catName === "Face") {
			var pixels = 80;
		} else if (catName === "Body") {
			var pixels = 160;
		} else if (catName === "Genital") {
			var pixels = 240
		};
		var imageLi = document.createElement("li");
		makeSubList.appendChild(imageLi);
		imageLi.style.listStyleType = "none";
		var newImg = document.createElement("div");
		imageLi.appendChild(newImg);	
		newImg.style.backgroundImage = "url(img/master.gif)";
		newImg.style.backgroundPosition = "-"+pixels+"px 0px";
		newImg.style.height = "80px";
		newImg.style.width = "80px";
	};
	
	//AUTO FILL DATA
	function autoFillData() {
		var json = {
			"gun1": {
				"gCat"    : ["Gun Type: ", "Simi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","SIG Sauer"],
				"gModel"  : ["Gun Model: ", "P220"],
				"gCal"    : ["Caliber: ", ".45 ACP"],
				"notes"   : ["Notes: ", "Elite"]
			},
			"gun2": {
				"gCat"    : ["Gun Type: ", "Simi-Auto Rifle"],
				"gMake"   : ["Gun Make: ","Daniel Defence"],
				"gModel"  : ["Gun Model: ", "EZ Car AR 15"],
				"gCal"    : ["Caliber: ", "5.56"],
				"notes"   : ["Notes: ", "Several Upgrades"]
			},
			"gun3": {
				"gCat"    : ["Gun Type: ", "Auto-Loader Shotgun"],
				"gMake"   : ["Gun Make: ","Benneli"],
				"gModel"  : ["Gun Model: ", "M4"],
				"gCal"    : ["Caliber: ", "12g"],
				"notes"   : ["Notes: ", "Added Rail"]
			},
			"gun4": {
				"gCat"    : ["Gun Type: ", "Simi-Auto Rifle"],
				"gMake"   : ["Gun Make: ","Springfield"],
				"gModel"  : ["Gun Model: ", "M1A Socom 16"],
				"gCal"    : ["Caliber: ", ".308"],
				"notes"   : ["Notes: ", "First Gen."]
			}
		};
		for (var n in json) {
			var id = Math.floor(Math.random()*100000000000000);
			localStorage.setItem(id, JSON.stringify(json[n]));
		};
	};
		 
    
	//Edit and Delete Functions 
	
	function makeItemLinks(key, linksLi) {
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Firearm";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);
		linksLi.style.listStyleType = "none";
		
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Firearm";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}; 
	
	function editItem() {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		toggleControls("off");
		$("gCat").value = item.gCat[1];
		$("gMake").value = item.gMake[1];
		$("gModel").value = item.gModel[1];
		$("gCal").value = item.gCal[1];
		$("notes").value = item.notes[1];
	
		save.removeEventListener("click", storeData);
		$("submit").value = "Edit Firearm";
		var editSubmit = $("submit");
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	};
	
// Validate 
	
	function validate(e) {
		var getgCat = $("gCat"),
			getgMake = $("gMake");
			getgModel = $("gModel");
			getgCal = $("gCal");
		var messageAry = [];
		
		errMsg.innerHTML = "";
		getgCat.style.border = "1px solid black";
		getgMake.style.border = "1px solid black";
		
		if (getgCat.value === "--Select Piercing Category--") {
			var catError = "!!!You Must Choose a Category!!!";
			getgCat.style.border = "1px solid red";
			messageAry.push(catError);
		};
		if (getgMake.value === "") {
			var gMakeError = "!!!You Must Enter the Guns/'s Make!!!";
			getgMake.style.border = "1px solid red";
			messageAry.push(gMakeError);
		};
		if (getgModel.value === "") {
			var gModelError = "!!!You Must Enter the Guns/'s Model!!!";
			getgModel.style.border = "1px solid red";
			messageAry.push(gMakeError);
			};
		if (getgCal.value === "") {
			var gCalError = "!!!You Must Enter the Guns/'s Caliber!!!";
			getgCal.style.border = "1px solid red";
			messageAry.push(gMakeError);
			};
		if (messageAry.length >= 1) {
			for (var i=0, j=messageAry.length; i<j; i++) {
			var txt = document.createElement("li");
			txt.innerHTML = messageAry[i];
			errMsg.appendChild(txt);
			};
		e.preventDefault();
		return false;
		} else {
			storeData(this.key);
		};
		
	};
	
    //Clear Items
    
    function clearLocal() {
		if(localStorage.length === 0) {
            alert("No Firearms Saved.");
        } else {
           var ask = confirm("Are you sure you want to remove this firearm?");
			if(ask) {
				localStorage.clear();
				alert("All Firearms Cleared");
				window.location.reload();
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
    
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);
    var clearLink = $("clear");
    clearLink.addEventListener("click", clearLocal);
    var save = $("submit");
    save.addEventListener("click", validate);
    
    // Variable Defaults
    
    var gCats = ["--Select Firearm Category--", "Revolver Pistol", "Simi-Auto Pistol", "Bolt Rifle", "Simi-Auto Rifle", "Pump Shotgun", "Auto-Loader Shotgun"];
    makeCats();
	var errMsg = $("errors");

});