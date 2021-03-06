'use strict'

let navigationIcon = document.getElementById('nav-icon');
let navigationBlock = document.getElementById('nav');
let triggered = false;

if (navigationIcon && navigationBlock) {
    navigationIcon.addEventListener('click', () => {
        if (!navigationBlock.hidden){
            navigationBlock.style.display = 'flex';
            triggered = true;
        }
    })

    addEventListener('click', (e) => {
        if (!e.target.closest('.nav')
            && !e.target.closest('.page__nav-icon')
            && triggered
            || e.target.closest('.nav__close-btn')) {
                navigationBlock.style.display = 'none';
                triggered = false
            }
        })
}
