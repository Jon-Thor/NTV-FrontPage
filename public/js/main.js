
var umnam = document.getElementById("um-nám");
var umnamtext = document.getElementById("un-nam-text");


const alltoggle = document.getElementsByClassName("toggle");
const textToggle = document.getElementsByClassName("toggle-text");




Array.prototype.forEach.call(alltoggle, function (x) {
    x.addEventListener("click", (x) => {
        if(window.getComputedStyle(textToggle.item(x)).display == "none"){
        textToggle.item(x).style.display = "block"
    }else{
        textToggle.item(x).style.display = "none"
    }})

})







