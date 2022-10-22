
var umnam = document.getElementById("um-nám");
var umnamtext = document.getElementById("un-nam-text");


const alltoggle = document.getElementsByClassName("toggle");
const textToggle = document.getElementsByClassName("toggle-text");



Array.prototype.forEach.call(alltoggle, function (x) {

    x.addEventListener("click", (e) => {

        console.log('item', x);

        console.log('e', e)

        pTag = x.getElementsByClassName('text')[0];

        pTag.classList.toggle('hide')



})});






