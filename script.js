const menu = document.querySelector('#menu');
const background = document.querySelector('#background');
const sidenav = document.querySelector('#sidenav');
const effect = document.querySelector('#effect');

effect.addEventListener('click', function(){
    background.style.transform = 'translatex(0px) scale(1)';
    background.style.filter = 'blur(0px)';
    sidenav.style.left = '-10%';
})

menu.addEventListener('click', function(){
    background.style.transform = 'translatex(250px) scale(.4) rotatey(-3deg) skewY(5deg)';
    background.style.filter = 'blur(0.5px)';
    sidenav.style.left = '2%';
})