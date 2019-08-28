"use strict"

let slideRow = document.getElementById('slide-row');
let slideControl = document.getElementById('slide-control');

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
        return this.first;
    },
    moveNext(){
        this.first = this.first.next;
        this.last = this.last.next;
    },
    movePre(){
        this.first = this.first.pre;
        this.last = this.last.pre;
    },
    nextToTop(){
        return this.first.next.obj
    },
    preToTop(){
        return this.first.pre.obj
    }
}

function slideWorker(slideNodes){
    for(let i of slideNodes){
        CircledList.addToTop(i);
    }
}
slideWorker(slideRow.children);

if(slide && slideControl){
    let transitionEnded = true;

    poseSlides();

    slideControl.addEventListener('click',(e)=>{
        console.log(window.event);
        if(e.target.closest('svg') && transitionEnded){
            let boolDirection = e.target.closest('svg').dataset.booleanDirection;

            if (boolDirection>0){
                moveSlide(CircledList.getTop().pre.obj, boolDirection);
                CircledList.moveNext();
            }
            else {
                moveSlide(CircledList.getTop().next.obj, boolDirection);
                CircledList.movePre();
            }

            poseSlides();
            transitionEnded = false;
        }
    })

    slideRow.addEventListener('transitionend',(e)=>{
        if(e.target.matches('.sub-slide')) 
        transitionEnded = true;
    })
}
    function moveSlide(slideNode, modifier, duration = '2s'){
        slideNode.style.transitionDuration = duration;
        slideNode.style.transform += `translateX(${modifier*100}%)`; 
    }

    function poseSlides(){
        CircledList.getTop().next.obj.style={};
        CircledList.getTop().next.obj.style.left='100%';
        CircledList.getTop().pre.obj.style={};
        CircledList.getTop().pre.obj.style.left='-100%';
    }
