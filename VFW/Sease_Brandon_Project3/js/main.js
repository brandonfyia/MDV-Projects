//Brandon Sease
//VFW 11/11
//Project 3


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
    
    function storeData() {
        var id           = Math.floor(Math.random()*1000000001);
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
            alert("No Piercings Saved Yet!")
            window.location.reload();
            };
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $("items").style.display = "block";
        for (var i=0, len=localStorage.length; i<len; i++) {
            var makeli = document.createElement("li");
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeli.appendChild(makeSubList);
            for (var n in obj) {
                var makeSubli = document.createElement("li");
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
            };
        };
    };
    
    //Clear Items
    
    function clearLocal() {
        if(localStorage.length === 0) {
            alert("No Piercings Saved.")
        } else {
            localStorage.clear();
            alert("All Piercings Cleared")
            window.location.reload();
            return false;
        };
    };
    
        //Set Link & Submit Click Events
    
    var displayLink = $("displayLink");
    displayLink.addEventListener("click", getData);
    var clearLink = $("clear");
    clearLink.addEventListener("click", clearLocal);
    var save = $("submit");
    save.addEventListener("click", storeData);
    
    // Variable Defaults
    
    var pCats = ["--Select Piercing Category--", "Ear", "Face", "Body", "Genital"];
    makeCats();

});