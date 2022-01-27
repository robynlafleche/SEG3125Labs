

//code for getPage function inspired from https://stackoverflow.com/a/56111513/15518664 and  by professor Caroline Barriere
//https://github.com/carolinebarriere/carolinebarriere.github.io/tree/master/SEG3125-Module2-Grocery  
function getPage(elem,hide1,hide2) {
    let value = ""
    let page = document.getElementById(elem);
    document.getElementById(hide1).style.display = "none"
    document.getElementById(hide2).style.display = "none"
    if (page.style.display == "")
        value = "none";

    page.style.display = value;
}