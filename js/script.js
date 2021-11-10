setInterval(function(){
    if (innerWidth <= 470){
        document.querySelector(".denis-pic").src = "img/mini-denis.png";
    }
    else{
        document.querySelector(".denis-pic").src = "img/denis.png";
    }
}, 1)

document.querySelector(".menu-butger-main").onclick = function(){
    document.querySelector(".menu-main").style.position = "fixed"
    document.querySelector(".menu-main").style.width = innerWidth-20+"px"
    document.querySelector(".menu-main").style.height = innerHeight-20+"px"
    document.querySelector(".menu-main").style.transform = "translateY(-30px)"
}
document.querySelector(".close").onclick = function(){
    location.reload()
}