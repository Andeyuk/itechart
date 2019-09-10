import {CachingCalculator as Calc} from '../modules/CachingCalculator'

export function StringCalculator_input_action(input, output){

    output.textContent = Calc.exec(input.value) + '\n';
    let calcCache=JSON.stringify(Calc.exec.getCache()).replace(/,/g,'\n')
    output.textContent += calcCache;

}