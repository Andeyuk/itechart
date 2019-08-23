'use strict'

let navigationIcon = document.getElementById('nav-icon');
let navigationBlock = document.getElementById('nav');

if (navigationIcon && navigationBlock) {
    navigationIcon.addEventListener('click', () => {
        if (!navigationBlock.hidden)
            navigationBlock.style.display = 'flex';

    })

    addEventListener('click', (e) => {
        console.log(e.target);
        if (!e.target.closest('.nav')
            && !e.target.closest('.header__nav-icon')) {
            navigationBlock.style.display = 'none';
        }
    })
}