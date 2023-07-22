
var date = new Date("01 Jan, 2024");
function hmm(){
    // ge
    

    var today = new Date();
    var diff = date.getTime() - today.getTime();
    // find number of days, hours, minutes, seconds
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if(diff>0){
        // use set precision to avoid trailing zeros
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
    }
}

const update = ()   => {
    setTimeout(() => {
        hmm();
        update();
    }, 1000);
}

update();



// get width of a div
var divv = document.getElementById("divid");
var width = divv.offsetWidth;

// find element by class name dot-right
var dots = document.getElementsByClassName("dot-right");
// transalte-x dots to the right by width of div
var w = window.innerWidth;
if(w > 768){
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.transform = "translate(" + (width-9) + "px, 41px)";
    }
}
else{
    for (var i = 0; i < dots.length; i++) {
        dots[i].style.transform = "translate(" + (width-4.5) + "px, 30px)";
    }
}


// listen for width change
window.addEventListener("resize", function() {
    var divv = document.getElementById("divid");
    var width = divv.offsetWidth;
    var dots = document.getElementsByClassName("dot-right");
    // get size of current window
    // size
    var w = window.innerWidth;
    if(w > 768){
        for (var i = 0; i < dots.length; i++) {
            dots[i].style.transform = "translate(" + (width-9) + "px, 41px)";
        }
    }
    else{
        for (var i = 0; i < dots.length; i++) {
            dots[i].style.transform = "translate(" + (width-4.5) + "px, 30px)";
        }
    }
});