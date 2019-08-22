'use strict'

let navigationIcon = document.getElementById('nav-icon');
let navigationBlock = document.getElementById('nav-list');

if (navigationIcon && navigationBlock) {
    navigationIcon.addEventListener('click', () => {
        if (!navigationBlock.hidden)
            navigationBlock.style.display = 'flex';

    })

    addEventListener('click', (e) => {
        console.log(e.target);
        if (!e.target.closest('.nav-list')
            && !e.target.closest('.page__nav-icon')) {
            navigationBlock.style.display = 'none';
        }
    })
}