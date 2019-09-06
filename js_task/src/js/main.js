
import { Helper } from './modules/Helper'
import { DateFormatter as DF} from './modules/DateFormatter'
import { Cache as Cacher} from './modules/Cache'
import { CachingCalculator as CCalc} from './modules/CachingCalculator'
import { Calculator as calc} from './modules/StringCalculator'

import {APT_input_handler as APT_handler} from './EventHandlers/ArrayProcessorHandler'
import {
    DateFormatter_input as DF_input_input,
    DateFormatter_input_change as DF_input_change
} from './EventHandlers/DateFromatterHandler'


let APT_input = document.getElementById('APT__input');
let APT_output = document.getElementById('APT__output');

let DF_input = document.getElementById('DateFormatter__input');
let DF_output = document.getElementById('DateFormaatter__output');
let DF_outputs = document.getElementsByClassName('DateFormatter__props');

window.addEventListener('change', (event)=>{
    switch(true){
        case controller(event, '#APT__input', true): return APT_handler(APT_input, APT_output)
        case controller(event, '#DateFormatter__input', true): return DF_input_change(DF_input, DF_output)
    };
})

window.addEventListener('input', (event)=>{
    switch(true){
        case controller(event, '#DateFormatter__input', true): DF_input_input(DF_input, DF_outputs)
    };
})
    


function controller(event, selector, strict = false){

    let checker;

    if (strict) checker = Element.prototype.matches.bind(event.target)
    else checker = Element.prototype.closest.bind(event.target)

    console.log(checker, selector);

    if (checker(selector))
        return true;
}