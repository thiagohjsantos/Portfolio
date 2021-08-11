(function readyJS(win,doc){
    'use strict';

const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e){
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e){
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')
const phpBar = document.querySelector('.bar-php')
const xamarinBar = document.querySelector('.bar-xamarin')
const netBar = document.querySelector('.bar-net')
const sqlBar = document.querySelector('.bar-sql')
const csharpBar = document.querySelector('.bar-csharp')
const rpaBar = document.querySelector('.bar-rpa')

let header = doc.querySelector('header');
let lastScrollTop = 0;

var t1 = new TimelineLite()

t1.fromTo(htmlBar, .75, {width: `calc(0% - 6px`,}, {width: `calc(70% - 6px)`, ease: Power4.easeOut})
.fromTo(cssBar, .75, {width: `calc(0% - 6px`}, {width: `calc(45% - 6px)`, ease: Power4.easeOut})
.fromTo(jsBar, .75, {width: `calc(0% - 6px`}, {width: `calc(45% - 6px)`, ease: Power4.easeOut})
.fromTo(reactBar, .75, {width: `calc(0% - 6px`}, {width: `calc(60% - 6px)`, ease: Power4.easeOut})
.fromTo(phpBar, .75, {width: `calc(0% - 6px`}, {width: `calc(40% - 6px)`, ease: Power4.easeOut})
.fromTo(rpaBar, .75, {width: `calc(0% - 6px`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
.fromTo(netBar, .75, {width: `calc(0% - 6px`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})
.fromTo(sqlBar, .75, {width: `calc(0% - 6px`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
.fromTo(csharpBar, .75, {width: `calc(0% - 6px`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})
.fromTo(xamarinBar, .75, {width: `calc(0% - 6px`}, {width: `calc(50% - 6px)`, ease: Power4.easeOut})


const contoller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(contoller)


const showRequiredCategory = event => {
    const getId = event.id
    const links = document.querySelectorAll(' .work-category button')
    for(i=0; i<links.length; i++) {
        if(links[i].hasAttribute(`class`)) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(` . category-${getId}`)
    const categories = document.querySelectorAll(`div[class ^= "category-"]`)
    for(i=0; i<categories.length; i++) {
        if(categories[i].hasAttribute(`class`)) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')

        }
    }

    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')


}


 window.addEventListener("scroll", function(){
     var header = document.querySelector("header");
     header.classList.toggle("sticky", window.scrollY > 0);
});


win.addEventListener("scroll", function(){
    

    let scrollTop = window.pageYOffset || doc.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.classList.add("remove");
    }
    else{
        header.classList.remove("remove");
    }
    lastScrollTop = scrollTop;
});


var current_rotation = 0;
document.getElementById("Icon").addEventListener('click', function() {
	// update total rotation
	// if angle is positive, rotation happens clockwise. if negative, rotation happens anti-clockwise.
    current_rotation += 360;
    
	// rotate clockwise by 90 degrees
    // document.getElementById("Icon").style.transform = 'rotate(' + current_rotation + 'deg)';
    document.getElementById("Icon").style.transform = 'rotate(' + current_rotation + 'deg)';  
    // document.getElementById("Icon").style.transform += 'rotateX(' + current_rotation + 'deg)'; 
   
});

	$(window).load(function() {
	$(".se-pre-con").fadeOut(12000);;
	});



// let imgSlide = doc.querySelectorAll(".imgSlide");

// function showDivs(){
//     for(let i = 0; i < imgSlide.length; i++) {
//         imgSlide[i].classList.remove('show');
//     }
//     slideCount++;
//     if(slideCount == imgSlide.length){slideCount = 0}
//     imgSlide[slideCount].classList.add('show');
//     setTimeout(showDivs, 5000);
// }

// setTimeout(showDivs, 2000);


var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 6){
      counter = 1;
    }
}, 6000);

ScrollOut({
    targets: '.skills h1,.html,.slider,.contact form,.contact h1,.about-me-info, .about img'
})


})(window,document);