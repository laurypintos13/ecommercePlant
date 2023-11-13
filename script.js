const open = document.getElementById('open');
const close = document.getElementById('close');
const nav = document.getElementById('nav');
const liHome = document.getElementById('liHome');
const liPlants = document.getElementById('liPlants');
const liAbout = document.getElementById('liAbout');
const liContact = document.getElementById('liContact');


open.addEventListener('click', ()=>{
    nav.classList.add("visible");
})
close.addEventListener('click', ()=>{
    nav.classList.remove("visible");
})
liHome.addEventListener('click', ()=>{
    nav.classList.remove("visible");
})
liPlants.addEventListener('click', ()=>{
    nav.classList.remove("visible");
})
liAbout.addEventListener('click', ()=>{
    nav.classList.remove("visible");
})
liContact.addEventListener('click', ()=>{
    nav.classList.remove("visible");
})

window.addEventListener('scroll', function(){
    const header = document.getElementById('header');
    header.classList.toggle("headerScroll", window.scrollY>0)
})