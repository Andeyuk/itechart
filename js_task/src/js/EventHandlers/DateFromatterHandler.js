
import { DateFormatter as DF } from '../modules/DateFormatter'
import { Helper } from '../modules/Helper'


export function DateFormatter_input_change(input, output) {

    let numbs = input.value.match(/\d+.?\d+.?\d+/)[0];
    let formats = input.value.match(/[YMD]+.?[YMD]+.?[YMD]+/g);

    let date = new DF(numbs, ...formats);

    output.textContent = date.toString() + '\n';
    output.textContent += Helper.functionOutput(date.getDate.bind(date));
    output.textContent += Helper.functionOutput(date.getMonth.bind(date));
    output.textContent += Helper.functionOutput(date.getDay.bind(date));
    output.textContent += Helper.functionOutput(date.getFullYear.bind(date));
    output.textContent += Helper.functionOutput(date.getFormattedDay.bind(date));
    output.textContent += Helper.functionOutput(date.getFormattedMonth.bind(date));
    output.textContent += Helper.functionOutput(date.getFormattedDate.bind(date));
    output.textContent += Helper.functionOutput(date.fromNow.bind(date));
}
