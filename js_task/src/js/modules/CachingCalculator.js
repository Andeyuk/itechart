import {Cache as Cacher} from './Cache';
import {Calculator as calc} from './StringCalculator';

export let CachingCalculator = {};

let calcProps = Object.getOwnPropertyNames(calc);
for(let i of calcProps)
    CachingCalculator[i] = Cacher.reg(calc[i].bind(CachingCalculator));
    

