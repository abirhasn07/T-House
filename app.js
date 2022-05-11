const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');
const sidebar=document.querySelector('.nav-list');


const showMenu=()=>{
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
    sidebar.classList.toggle("active")

}


TweenMax.from('.navbar',1,{
    delay:.3,
    x:-40,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-headline',2,{
    delay:.5,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.header-subtitle',3,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.cta',4,{
    delay:.5,
    y:20,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('form',5,{
    delay:0.3,
    y:80,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.product-info',6,{
    delay:0.5,
    x:-100,
    opacity:0,
    ease:Expo.easeInOut
    })
TweenMax.from('.product-card',7,{
    delay:0.5,
    y:200,
    opacity:0,
    ease:Expo.easeInOut
    })