const menuBtn = document.querySelector(".menuIcon");
const menuContent = document.querySelector(".menuContent");

function openClassAdd(){
    if(menuBtn.classList.contains('open')){
        menuBtn.classList.remove('open');
        menuContent.style.left = '-100%';
    }
    else{
        menuBtn.classList.add('open');
        menuContent.style.left = '0';
    }
}
menuBtn.addEventListener("click", openClassAdd);

var menuList = document.querySelector(".menuItems");
function menuListHider(){
    if(window.innerWidth < 768){
        menuBtn.classList.remove('open');
        menuContent.style.left = '-100%';
    }

}
menuList.addEventListener("click", menuListHider);