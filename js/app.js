const menuBtn = document.querySelector(".menuIcon");
const menuContent = document.querySelector(".menuContent");
var menuBar = document.querySelector(".menuItems");


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



function menuBarHider(){
    if(window.innerWidth < 768){
        menuBtn.classList.remove('open');
        menuContent.style.left = '-100%';
    }

}
menuBar.addEventListener("click", menuBarHider);



const sections = document.querySelectorAll('section');
const menuList = document.querySelectorAll('.menuItems li');

window.addEventListener("scroll", ()=> {
    let currentSection = "";
    sections.forEach(section => {
        if(scrollY > section.offsetTop){
            currentSection = section.getAttribute('id');
        }
    });

    menuList.forEach( li => {
        li.classList.remove('activeNav');
        if(li.classList.contains(currentSection)){
            li.classList.remove('activeNav');
        } else{
            li.classList.remove('activeNav');
        };
    });
})
