let slide1 = document.querySelector('#slide01');
let slide2 = document.querySelector('#slide02');
let slide3 = document.querySelector('#slide03');
let slideList = document.querySelector('.slide-list');
slide1.addEventListener('click',function(){
    slideList.style.transform = "translateX(0)";
    slide1.style.background = 'var(--color-blue)';
    slide3.style.background = '#727272';
});
slide2.addEventListener('click',function(){
    slideList.style.transform = "translateX(-425px)";
    slide2.style.background = "var(--color-blue)";
    slide1.style.background = '#727272';
});

slide3.addEventListener('click',function(){
    slideList.style.transform = "translateX(-850px)";
    slide3.style.background = 'var(--color-blue)';
    slide1.style.background = '#727272';
    slide2.style.background = '#727272';
});