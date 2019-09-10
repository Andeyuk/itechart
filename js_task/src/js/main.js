import { APT_input_handler as APT_handler} from './EventHandlers/ArrayProcessorHandler'
import { DateFormatter_input_change as DF_input_action} from './EventHandlers/DateFromatterHandler'
import { TextFormatter_input as TF_input_action} from './EventHandlers/TextFormatterHandler'
import { ArraySorter_input as AS_input_action} from './EventHandlers/ArraySorterHandler'
import { BinaryConverter_input_action as BC_input_action } from './EventHandlers/BinaryConverterHandler'
import { StringCalculator_input_action as SC_input_action} from './EventHandlers/StringCalculator'
import { 
    Cacher_input_acion,
    Cacher_clear } from './EventHandlers/CacherHandler'

let APT_input = document.getElementById('APT__input');
let APT_output = document.getElementById('APT__output');

let DF_input = document.getElementById('DateFormatter__input');
let DF_output = document.getElementById('DateFormaatter__output');


let TF_wrap = document.getElementById('text-formatter__wrap');
let TF_length = document.getElementById('text-formatter__length');
let TF_rows = document.getElementById('text-formatter__rows');
let TF_input = document.getElementById('text-formatter__input');
let TF_output = document.getElementById('text-formatter__output');

let TF_args = [
    TF_length,
    TF_rows,
    TF_wrap
]
let TF_selectors='#text-formatter__input, #text-formatter__length, #text-formatter__rows, #text-formatter__wrap';

let AS_input = document.getElementById('sorter__input');
let AS_output = document.getElementById('sorter__output');

let BC_input = document.getElementById('converter__input');
let BC_output = document.getElementById('converter__output');
let BC_base = document.getElementById('converter__base');
let BC_new_base = document.getElementById('converter__new-base');

let BC_args = [
    BC_base,
    BC_new_base
]
let Bc_selectors = '#converter__input, #converter__base, #converter__new-base';

let SC_input = document.getElementById('string-calc__input');
let SC_output = document.getElementById('string-calc__output');

let Cache_input = document.getElementById('cacher__input');
let Cache_output = document.getElementById('cacher__output');
let Cache_limit = document.getElementById('cacher__limit');
let Cache_clear = document.getElementById('cacher__clear');


//I'd like to test the perfomance of this approach
window.addEventListener('input', (event)=>{
    switch(true){
        case controller(event, '#APT__input', true): return APT_handler(APT_input, APT_output)
        case controller(event, '#DateFormatter__input', true): return DF_input_action(DF_input, DF_output)
        case controller(event, TF_selectors, true): return TF_input_action(TF_input, TF_args, TF_output)
        case controller(event, '#sorter__input', true): return AS_input_action(AS_input, AS_output)
        case controller(event, Bc_selectors, true): return BC_input_action(BC_input, BC_args, BC_output)
        case controller(event, '#string-calc__input', true): return SC_input_action(SC_input, SC_output)
        case controller(event, '#cacher__input', true): return Cacher_input_acion(Cache_input, Cache_limit, Cache_output)
    };
})

window.addEventListener('click', (event)=>{
    switch(true){
        case controller(event, '#cacher__clear', true): return Cacher_clear(Cache_output)
    };
})

window.addEventListener('load', ()=>{
    APT_handler(APT_input, APT_output);
    DF_input_action(DF_input, DF_output);
    TF_input_action(TF_input, TF_args, TF_output);
    AS_input_action(AS_input, AS_output);
    BC_input_action(BC_input, BC_args, BC_output);
    SC_input_action(SC_input, SC_output);
    Cacher_input_acion(Cache_input, Cache_limit, Cache_output);
})





function controller(event, selector, strict = false){

    let checker;

    if (strict) checker = Element.prototype.matches.bind(event.target)
    else checker = Element.prototype.closest.bind(event.target)

    console.log(event.target, selector, checker(selector));

    if (checker(selector))
        return true;
}