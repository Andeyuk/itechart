"use strict"

let slideRow = document.getElementById('slide-row');
let slideControl = document.getElementById('slide-control');
console.log(slide,slideControl);

let CircledList={
    last:null,
    first:null,
    addToTop(obj){
        let newObj = {obj};
        if(this.last === null){
            this.last = newObj;
            this.first = newObj;
            this.last.next = newObj;
            this.first.pre = newObj;
        }
        newObj.pre = this.last;
        newObj.next = this.first;
        this.last.next = newObj;
        this.first.pre = newObj;
        this.last = newObj;
    },
    getTop(){
        return this.last;
    },
    moveNext(){
        this.first = this.first.next;
        this.last = this.last.next;
    },
    movePre(){
        this.first = this.first.pre;
        this.last = this.last.pre;
    }
}

function slideWorker(slideNodes){
    for(let i of slideNodes){
        CircledList.addToTop(i);
    }
}
slideWorker(slideRow.children);

if(slide && slideControl)
        slideControl.addEventListener('click',(e)=>{
        console.log(e);
        if(e.target.closest('svg')){
            console.log(e.target.closest('svg').dataset.booleanDirection)
            let boolDirection = e.target.closest('svg').dataset.booleanDirection;
            slideRow.firstElementChild.style.transitionDuration = '2s';
            slideRow.firstElementChild.style.transform = `translateX(${boolDirection*100}%)`; 
        }
    })

    function moveSlide(slideNode, modifier, duration = '2s'){
        slideNode.style.transitionDuration +='0s,' + duration;
        slideNode.style.transform += `translateX(${modifier*100}%)`; 
    }
