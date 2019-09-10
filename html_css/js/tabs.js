'use strict'

let tabs = document.getElementById('media-tabs');

if (tabs)
    tabs.addEventListener('click',(e)=>{
        let curTab = e.target.closest('.media-tabs__item');
        let isCloseToActiveTab = e.target.closest('.media-tabs__item--active');

        if (!isCloseToActiveTab && curTab){
            let activeTab = tabs.querySelector('.media-tabs__item--active');

            swapClass(activeTab, curTab, 'media-tabs__item--active');
        }  
    })

function swapClass(nodeRm, nodeAdd, className){
    if (!nodeRm || !nodeAdd || !className) 
        throw new TypeError('Check parameters');

    nodeRm.classList.remove(className);
    nodeAdd.classList.add('media-tabs__item--active');

    return true;
}