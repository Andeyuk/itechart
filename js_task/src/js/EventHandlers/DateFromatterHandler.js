
import { DateFormatter as DF } from '../modules/DateFormatter'

export function DateFormatter_input(input, outputs) {

    [...outputs].forEach(el=>{
        el.textContent = input.value;
    })

}

export function DateFormatter_input_change(input, output) {

    let vals = input.value.replace(/[“,]?/,'').split(',');

    output.textContent = new DF(...vals).toString();
}

export function DateFormatter_FullDate_click(output){

    
}