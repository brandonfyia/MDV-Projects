//Brandon Sease
//VFW 11/11
//Project 2


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
    
    //Store Items    
    
    function storeData() {
        var id           = Math.floor(Math.random()*1000000001);
        var item         = {};
            item.date    = ["Date", $('date').value];
            item.pCat    = ["Piercing Category", $('pCat').value];
            item.pName   = ["Piercing Name", $('pName').value];
            item.cash    = ["Cash", $('cash').value];
            item.credit  = ["Credit", $('credit').value];
            item.cTip    = ["Credit Tip", $('cTip').value];
            item.percent = ["Percent", $('percent').value];
            item.notes   = ["Notes", $('notes').value];
        localStorage.setItem(id, JSON.stringify(item));
        alert(item.pName[1] + " saved");
    };
    
    //Get Items
    
    function getData() {
        if (localStorage.getItem("appPName")) {
            var date         = localStorage.getItem("appDate");
            var piercingType = localStorage.getItem("appPCat");
            var pName        = localStorage.getItem("appPName");
            var cash         = localStorage.getItem("appCash");
            var credit       = localStorage.getItem("appCredit");
            var cTip         = localStorage.getItem("appCTip");
            var percent      = localStorage.getItem("appPercent");
            var notes        = localStorage.getItem("appNotes");
                var piercings = document.getElementById("piercings");
                while (piercings.firstChild)
                    piercings.removeChild(piercings.firstChild);
                var newUL  = document.createElement("ul");
                var newLis = document.createElement("li");
                newUL.appendChild(newLis);
                var liTxt  = document.createTextNode(pName + "was added to local storage.")
                newLis.appendChild(liTxt);
                piercings.appendChild(newUL);
        } else {
            var pname = "Enter Piercings Name";  
        };
        document.getElementById("pName").value = pName;
        document.getElementById()
    };
    
    //Clear Items
    
    function clearLocal() {
      clear: localStorage.clear();
      return false;
    };
    
        //Set Link & Submit Click Events
    
    //var displayLink = $("displayLink");
    //displayLink.addEventListener("click", getData);
    //var clearLink = $("clear");
    //clearLink.addEventListener("click", clearLocal);
    var save = $("submit");
    save.addEventListener("click", storeData);
    
    // Variable Defaults
    
    var pCats = ["--Select Piercing Category--", "Ear", "Face", "Body", "Genital"];
    makeCats();

});