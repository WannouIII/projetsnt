function openNav() {
    document.getElementById("SideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("SideMenu").style.width = "0px";
}

function change() {
    var elem = document.getElementById("opengal");
    if (elem.value == "close"){
        document.getElementById("galery").style.display = "none";
        elem.title = "Montre la suite de la gallerie.";
        elem.style.transform = "rotate(0deg)";  
        return elem.value = "open";
    }else if (elem.value == "open"){
        document.getElementById("galery").style.display = "block";
        elem.title = "Cache la suite de la gallerie.";
        elem.style.transform = "rotate(180deg)";
        return elem.value = "close";
    }
}

