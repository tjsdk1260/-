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
    slideList.style.transform = "translateX(-550px)";
    slide2.style.background = "var(--color-blue)";
    slide1.style.background = '#727272';
});
slide3.addEventListener('click',function(){
    slideList.style.transform = "translateX(-1100px)";
    slide3.style.background = 'var(--color-blue)';
    slide1.style.background = '#727272';
    slide2.style.background = '#727272';
});
// 메인 버튼 슬라이드
const clickMenu = document.querySelector('.hamburger');
const mobileGnb = document.querySelector(".mobile");

clickMenu.addEventListener('click',()=>{
   mobileGnb.classList.toggle('on');
});
//모바일 클릭 메뉴
const slides = document.querySelector(".department-list");
const slide = document.querySelectorAll(".department-list li");
const currentIdx = 0;
const slideCount = slide.length;
const slideWidth = 230;
const slideMargin = 30;
const preBtn = document.querySelector('.pre');
const nextBtn = document.querySelector('.next');

slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

function moveSlide(num){
    slides.style.left = -num * 260 + 'px';
    currentIdx = num;
};

nextBtn.addEventListener('click',function(){
    if(currentIdx < slideCount - 1){
        moveSlide(currentIdx + 1);
    }else{
        moveSlide(0);
    }
   
});

const goTop = document.querySelector('.go-top');

goTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
