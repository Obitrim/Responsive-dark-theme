

var navToggler = document.getElementsByClassName("icon")[0];
var content = document.getElementsByClassName("content")[0];
var mainNav = document.getElementsByClassName("nav-main")[0];



navToggler.addEventListener("click", toggleMainNav);

function toggleMainNav(event){
    if(mainNav.classList.contains("slide-down")){
        mainNav.classList.remove("slide-down");
        mainNav.classList.add("slide-up");
        setTimeout(() => {
            content.classList.add("content-box-shadow");
        }, 200);

    }else{
        mainNav.classList.remove("slide-up");
        mainNav.classList.add("slide-down");
        setTimeout(() => {
            content.classList.remove("content-box-shadow");
        }, 200);
         
    }
}