import {Calculator as Calc} from '../modules/StringCalculator'

export function StringCalculator_input_action(input, output){

    output.textContent = Calc.exec(input.value);

}