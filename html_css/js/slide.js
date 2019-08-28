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
        return this.first.obj;
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

if(slide && slideControl)
        slideControl.addEventListener('click',(e)=>{
        if(e.target.closest('svg')){
            let boolDirection = e.target.closest('svg').dataset.booleanDirection;
            if (boolDirection > 0){
                CircledList.nextToTop();
                moveSlide(CircledList.getTop(), boolDirection);
                CircledList.moveNext();
            }
            else {
                CircledList.preToTop()
                moveSlide(CircledList.getTop(), boolDirection);
                CircledList.movePre();
            }
            

        }
    })

    function moveSlide(slideNode, modifier, duration = '2s'){
        slideNode.style.transitionDuration += duration;
        slideNode.style.transform += `translateX(${modifier*100}%)`; 
    }

    function toLeft(slideNode){
        slideNode.style = {};
        slideNode.style.left = '100%';
    }

    function toRight(slideNode){
        slideNode.style = {};
        slideNode.style.left = '-100%';
    }

