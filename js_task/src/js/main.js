import { ArrayProcessor as APT } from '../js/ArrayProcessor'
import { Helper } from '../js/Helper'
import {DateFormatter as DF} from '../js/DateFormatter'


let input = document.getElementById('APT__input');
let output = document.getElementById('APT__output');

input.addEventListener('change', function() {
    let numbers = this.value.match(/-?\d+/g);

    console.log('lol');

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseInt(numbers[i]);
    }
    output.textContent = '';
    output.textContent += Helper.functionOutput(
        APT.subSum,
        numbers
    );

    output.textContent += Helper.functionOutput(
        APT.getMaxIncSubSeq,
        numbers
    );

    output.textContent += Helper.functionOutput(
        APT.getMax,
        numbers
    );

    output.textContent += Helper.functionOutput(
        APT.getMin,
        numbers
    );

    output.textContent += Helper.functionOutput(
        APT.getMedium,
        numbers
    );
});