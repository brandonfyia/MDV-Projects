//Brandon Sease
//VFW 11/11
//Project 4


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
        makeSelect.setAttribute("id", "pCat");
        for(var i=0, j=pCats.length; i<j; i++) {
          var makeOption = document.createElement("option");
          var optText = pCats[i];
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
            item.date    = ["Date:", $('date').value];
            item.pCat    = ["Piercing Category:", $('pCat').value];
            item.pName   = ["Piercing Name:", $('pName').value];
            item.cash    = ["Cash:", $('cash').value];
            item.credit  = ["Credit:", $('credit').value];
            item.cTip    = ["Credit Tip:", $('cTip').value];
            item.percent = ["Percent:", $('percent').value];
            item.notes   = ["Notes:", $('notes').value];
        localStorage.setItem(id, JSON.stringify(item));
        alert(item.pName[1] + " saved");
    };
    
    //Get Items
    
    function getData() {
        toggleControls("on");
        if (localStorage.length === 0) {
            autoFillData();
			alert("No Piercings Saved Yet! So default data was added.")
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
            getImg(obj.pCat[1], makeSubList);
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
			"piercing1": {
				"date"    : ["Date: ", "2011-30-11"],
				"pCat"    : ["Piercing Category: ", "Ear"],
				"pName"   : ["Piercing Name: ","Rook"],
				"cash"    : ["Cash: ", "40"],
				"credit"  : ["Credit: ", "0"],
				"cTip"    : ["Credit Tip: ", "0"],
				"percent" : ["Percent: ", "50"],
				"notes"   : ["Notes: ", "Ring."]
			},
			"piercing2": {
				"date"    : ["Date: ", "2011-30-11"],
				"pCat"    : ["Piercing Category: ", "Face"],
				"pName"   : ["Piercing Name: ","Lip"],
				"cash"    : ["Cash: ", "0"],
				"credit"  : ["Credit: ", "50"],
				"cTip"    : ["Credit Tip: ", "10"],
				"percent" : ["Percent: ", "50"],
				"notes"   : ["Notes: ", "Stud with gem."]
			},
			"piercing3": {
				"date"    : ["Date: ", "2011-30-11"],
				"pCat"    : ["Piercing Category: ", "Body"],
				"pName"   : ["Piercing Name: ","Navel"],
				"cash"    : ["Cash: ", "20"],
				"credit"  : ["Credit: ", "20"],
				"cTip"    : ["Credit Tip: ", "5"],
				"percent" : ["Percent: ", "50"],
				"notes"   : ["Notes: ", ""]
			},
			"piercing4": {
				"date"    : ["Date: ", "2011-30-11"],
				"pCat"    : ["Piercing Category: ", "Genital"],
				"pName"   : ["Piercing Name: ","VCH"],
				"cash"    : ["Cash: ", "0"],
				"credit"  : ["Credit: ", "60"],
				"cTip"    : ["Credit Tip: ", "7"],
				"percent" : ["Percent: ", "50"],
				"notes"   : ["Notes: ", "Bent barbell"]
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
		var editText = "Edit Piercing";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var breakTag = document.createElement("br");
		linksLi.appendChild(breakTag);
		linksLi.style.listStyleType = "none";
		
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Piercing";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}; 
	
	function editItem() {
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		toggleControls("off");
		$("date").value = item.date[1];
		$("pCat").value = item.pCat[1];
		$("pName").value = item.pName[1];
		$("cash").value = item.cash[1];
		$("credit").value = item.credit[1];
		$("cTip").value = item.cTip[1];
		$("percent").value = item.percent[1];
		$("notes").value = item.notes[1];
	
		save.removeEventListener("click", storeData);
		$("submit").value = "Edit Piercing";
		var editSubmit = $("submit");
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	};
	
// Validate 
	
	function validate(e) {
		var getPCat = $("pCat"),
			getPName = $("pName");
		var messageAry = [];
		
		errMsg.innerHTML = "";
		getPCat.style.border = "1px solid black";
		getPName.style.border = "1px solid black";
		
		if (getPCat.value === "--Select Piercing Category--") {
			var catError = "!!!You Must Choose a Category!!!";
			getPCat.style.border = "1px solid red";
			messageAry.push(catError);
		};
		if (getPName.value === "") {
			var pNameError = "!!!You Must Enter the Piercing Name!!!";
			getPName.style.border = "1px solid red";
			messageAry.push(pNameError);
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
            alert("No Piercings Saved.");
        } else {
           var ask = confirm("Are you sure you want to remove this piercing?");
			if(ask) {
				localStorage.clear();
				alert("All Piercings Cleared");
				window.location.reload();
				return false;
			}else {
				alert("Piercings Still Saved.");
			};
        };
    };
    
	function deleteItem () {
		var ask = confirm("Are you sure you want to remove this piercing?");
		if(ask) {
			localStorage.removeItem(this.key);
			window.location.reload();
		}else {
			alert("Piercing Saved.");
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
    
    var pCats = ["--Select Piercing Category--", "Ear", "Face", "Body", "Genital"];
    makeCats();
	var errMsg = $("errors");

});