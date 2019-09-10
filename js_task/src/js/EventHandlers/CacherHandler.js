import {Cache as C} from '../modules/Cache'

export function Cacher_input_acion(input, limit, output){
    let cachedFunc = C.reg(say, 2);

    cachedFunc(input.value);
    let cache = JSON.stringify(cachedFunc.getCache()).replace(/,/g,'\n')

    output.textContent = cache + '\n';
}

export function Cacher_clear(output){
    C.register = [];
    output.textContent = '';
}


function say(arg){
    return 'Hello' + arg
}
