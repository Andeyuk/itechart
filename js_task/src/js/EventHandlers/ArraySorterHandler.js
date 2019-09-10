import { Helper } from '../modules/Helper'
import { ArraySorter as AS } from '../modules/ArraySorter'

export function ArraySorter_input_action(input, output) {
    let numbers = input.value.match(/-?\d+/g);

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = parseInt(numbers[i]);
    }
    output.textContent = '';
    output.textContent += Helper.functionOutput(
        AS.bubbleSort,
        numbers
    );

    output.textContent += Helper.functionOutput(
        AS.insertionSort,
        numbers
    );

    output.textContent += Helper.functionOutput(
        AS.selectionSort,
        numbers
    );

    output.textContent += Helper.functionOutput(
        AS.mergeSort.bind(AS),
        numbers
    );
}