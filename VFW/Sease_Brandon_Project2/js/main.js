//Brandon Sease
//VFW 11/11
//Project 2

// Variables


//Functions

function storeItems(id) {
    var date         = document.getElementById("date").value;
    var piercingType = document.getElementById("piercingtype").value;
    var pName        = document.getElementById("pName").value;
    var cash         = document.getElementById("cash").value;
    var credit       = document.getElementById("credit").value;
    var cTip         = document.getElementById("cTip").value;
    var percent      = document.getElementById("percent").value;
    var notes        = document.getElementById("notes").value;
    localStorage.setItem("appDate", date);
    localStorage.setItem("appPiercingType", itemQty);
    localStorage.setItem("appPName", pName);
    localStorage.setItem("appCash", cash);
    localStorage.setItem("appCredit", credit);
    localStorage.setItem("appCTip", cTip);
    localStorage.setItem("appPercent", percent);
    localStorage.setItem("appNotes", notes);   
};

function getItems() {
    if (localStorage.getItem("appPName")) {
        var date         = localStorage.getItem("appDate");
        var piercingType = localStorage.getItem("appPiercingType");
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

function clearLocal() {
  clear: localStorage.clear();
  return false;
};