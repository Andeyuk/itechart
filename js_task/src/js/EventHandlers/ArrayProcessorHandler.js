import { Helper } from '../modules/Helper'
import { ArrayProcessor as APT } from '../modules/ArrayProcessor'

export function APT_input_handler(input, output) {
    let numbers = input.value.match(/-?\d+/g);

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
}