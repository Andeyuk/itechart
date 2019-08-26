'use strict'

let tabs = document.getElementById('media-tabs');

if (tabs)
    tabs.addEventListener('click',(e)=>{
        let curTab = e.target.closest('.media-tabs__item');
        
        if (!e.target.closest('.media-tabs__item--active')){
            let activeTab = tabs.querySelector('.media-tabs__item--active');
            activeTab.classList.remove('media-tabs__item--active');
            curTab.classList.add('media-tabs__item--active');
        }  
    })