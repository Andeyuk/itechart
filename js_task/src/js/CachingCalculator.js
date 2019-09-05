import {Cache as Cacher} from '../js/Cache';
import {Calculator as calc} from '../js/StringCalculator';

export let CachingCalculator = {};

let calcProps = Object.getOwnPropertyNames(calc);
for(let i of calcProps)
    CachingCalculator[i] = Cacher.reg(calc[i].bind(CachingCalculator));
    

