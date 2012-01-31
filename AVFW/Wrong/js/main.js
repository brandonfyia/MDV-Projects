/*
 	Brandon Sease
    MIU 11/12
    Project 4
*/


//Functions

$(document).ready (function() {
	
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
		var getDiv = document.getElementById("myList");
		var makeUl = document.createElement("ul");
		makeUl.setAttribute("data-role", "listview");
		makeUl.setAttribute("data-filter", "true");
		makeUl.setAttribute("id", "theList");		
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
		$("#gCat").value = item.gCat[1];
		$("#gMake").value = item.gMake[1];
		$("#gModel").value = item.gModel[1];
		$("#gCal").value = item.gCal[1];
		$("#notes").value = item.notes[1];
		save.removeEventListener("click", storeData);
		$("#submit").value = "Edit Firearm";
		var editSubmit = $("#submit");
		editSubmit.addEventListener("click", validate);
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
    var sortA = $("#sorter");
	sortA.click(sortAlpha);
	var disp1 = $("#displayLink1");
	disp1.click(getData);
	var disp2 = $("#displayLink2");
	disp2.click(getData);
	var disp3 = $("#displayLink3");
	disp3.click(getData);
	var disp4 = $("#displayLink4");
	disp4.click(getData);
	var disp5 = $("#displayLink5");
	disp5.click(getData);
	var disp6 = $("#displayLink6");
	disp6.click(getData);
	var disp7 = $("#displayLink7");
	disp7.click(getData);
	var disp8 = $("#displayLink8");
	disp8.click(getData);
	var disp9 = $("#displayLink9");
	disp9.click(getData);
    var clearLink1 = $("#clear1");
    clearLink1.click(clearLocal);
    var clearLink2 = $("#clear2");
    clearLink2.click(clearLocal);
//    var save = $("#submit");
//    save.click(storeData);

    // Variable Defaults
    

});

