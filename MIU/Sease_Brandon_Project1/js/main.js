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
/*    // Toggel Controles
    
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
*/    
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
        alert(item.gCat[1] + " saved");
    };
    
    //Get Items
    
    function getData() {
        if (localStorage.length === 0) {
            autoFillData();
			alert("No Firearms Saved Yet! So default data was added.")
            window.location.reload();
            };
		var getDiv = document.getElementById("myList");
		var makeUl = document.createElement("ul");
		makeUl.setAttribute("data-role", "listview");
		makeUl.setAttribute("data-filter", "true");
		getDiv.appendChild(makeUl);
        for (var i=0, len=localStorage.length; i<len; i++) {
			var makeLi = document.createElement("li");
			makeUl.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
			var makeH3 = document.createElement("h3");
			getImg(obj.gCat[1], makeLi)
			makeLi.appendChild(makeH3);
			makeH3.innerHTML = obj.gModel[1];
			for (var n in obj) {	
				var makeP = document.createElement("p");
				makeLi.appendChild(makeP);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeP.innerHTML = optSubText;
            };
        };
    };
	
	//Get Image for correct cat.  !!! Using CSS Sprites !!!
	
	function getImg(catName, makeSubList) {
		var pixels = 0;
		if (catName === "Revolver Pistol") {
			var pixels = 0
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
		var imageLi = document.createElement("div");
		makeSubList.appendChild(imageLi);
    	imageLi.style.backgroundImage = "url(img/master.gif)";
		imageLi.style.backgroundPosition = "-"+pixels+"px 0px";
		imageLi.style.height = "80px";
		imageLi.style.width = "80px";
	};
	
	//AUTO FILL DATA
	function autoFillData() {
		for (var n in json) {
			var id = Math.floor(Math.random()*100000000000000);
			localStorage.setItem(id, JSON.stringify(json[n]));
		};
	};
		 
    
	//Edit and Delete Functions 
	
	function makeItemLinks(key, linksLi) {
		var editLink = document.createElement("a");
		editLink.href = "#addItem";
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
		
		if (getgCat.value === "--Select Firearm Category--") {
			var catError = "!!!You Must Choose a Category!!!";
			getgCat.style.border = "1px solid red";
			messageAry.push(catError);
		};
		if (getgMake.value === "") {
			var gMakeError = "!!!You Must Enter the Guns\'s Make!!!";
			getgMake.style.border = "1px solid red";
			messageAry.push(gMakeError);
		};
		if (getgModel.value === "") {
			var gModelError = "!!!You Must Enter the Guns\'s Model!!!";
			getgModel.style.border = "1px solid red";
			messageAry.push(gMakeError);
			};
		if (getgCal.value === "") {
			var gCalError = "!!!You Must Enter the Guns\'s Caliber!!!";
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
    
    var gCats = ["--Select Firearm Category--", "Revolver Pistol", "Semi-Auto Pistol", "Bolt Rifle", "Semi-Auto Rifle", "Pump Shotgun", "Auto-Loader Shotgun"];
    makeCats();
	var errMsg = $("errors");

});