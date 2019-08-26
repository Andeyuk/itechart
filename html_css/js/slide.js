"use strict"

let slide = document.getElementById('slide-row');
let slideControl = document.getElementById('slide-control');
console.log(slide,slideControl);

if(slide && slideControl)
        slideControl.addEventListener('click',(e)=>{
        console.log(e);
        if(e.target.closest('svg')){
            console.log(e.target.closest('svg').dataset.booleanDirection)
            let boolDirection = e.target.closest('svg').dataset.booleanDirection;
            slide.firstElementChild.style.transitionDuration = '2s';
            slide.firstElementChild.style.transform = `translateX(${boolDirection*100}%)`; 
        }
    })

    function moveSlide(slideNode, modifier, duration = '2s'){
        slideNode.style.transitionDuration = duration;
        slideNode.style.transform = `translateX(${modifier*100}%)`; 
    }
