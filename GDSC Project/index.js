
document.getElementById("s").addEventListener("click", drum1);
document.getElementById("a").addEventListener("click", drum2);
document.getElementById("k").addEventListener("click", drum3);
document.getElementById("l").addEventListener("click", drum4);
document.getElementById("y").addEventListener("click", drum5);
document.getElementById("v").addEventListener("click", drum6);
document.getElementById("p").addEventListener("click", drum7);
function drum1() {
    audio = new Audio("sounds/satvik boss.mp3");
    audio.play();
}
function drum2() {
    audio = new Audio("sounds/ankur boss.mp3");
    audio.play();
}
function drum3() {
    audio = new Audio("sounds/kritansh boss.mp3");
    audio.play();
}
function drum4() {
    audio = new Audio("sounds/lakshita boss.mp3");
    audio.play();
}
function drum5() {
    audio = new Audio("sounds/yogit boss.mp3");
    audio.play();
}
function drum6() {
    audio = new Audio("sounds/vanshaj boss.mp3");
    audio.play();
}
function drum7() {
    audio = new Audio("sounds/purva boss.mp3");
    audio.play();
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    animation(event.key);
})

function makesound(key) {
    var audio;
    switch (key) {
        case "s":
            audio = new Audio("sounds/satvik boss.mp3");
            break;
        case "a":
            audio = new Audio("sounds/ankur boss.mp3");
            break;
        case "k":
            audio = new Audio('sounds/kritansh boss.mp3');
            break;
        case "l":
            audio = new Audio("sounds/lakshita boss.mp3");
            break;
        case "v":
            audio = new Audio("sounds/vanshaj boss.mp3");
            break;
        case "y":
            audio = new Audio("sounds/yogit boss.mp3");
            break;

        case "p":
            var audio = new Audio("sounds/purva boss.mp3");
            break;



    }

    if (audio) {
        audio.play();
    }
}
function animation(currentkey) {
    var active = document.querySelector("#" + currentkey);
    active.classList.add("pressed");
    setTimeout(function () {
        active.classList.remove("pressed");
    }, 100);
}
document.getElementById("s").addEventListener("mouseover",function()
{
    document.querySelector(".satvik").style.display="block"
    document.querySelector(".ip").style.display="none"
    
    


});
document.getElementById("k").addEventListener("mouseover",function()
{
    document.querySelector(".kritansh").style.display="block"
    document.querySelector(".ip").style.display="none"
});;
document.getElementById("p").addEventListener("mouseover",function()
{
    document.querySelector(".purva").style.display="block"
    document.querySelector(".ip").style.display="none"
});;

document.getElementById("y").addEventListener("mouseover",function()
{
    document.querySelector(".yogit").style.display="block"
    document.querySelector(".ip").style.display="none"
});;
document.getElementById("l").addEventListener("mouseover",function()
{
    document.querySelector(".lakshita").style.display="block"
    document.querySelector(".ip").style.display="none"
});;






