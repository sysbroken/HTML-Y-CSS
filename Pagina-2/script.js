window.addEventListener("scroll", function(){
    var menu = document.querySelector(".bar-principal");
    menu.classList.toggle("down",window.scrollY>0);
})