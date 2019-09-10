
import { textFormatter as TF } from '../modules/TextFormatter'

export function TextFormatter_input_action(input, args, output) {

    let params = args.map((el)=>el.value);
    let formattedText = TF(input.value, ...params);

    output.textContent = '';
    if(formattedText.forEach)
        formattedText.forEach((el=>{
            el+='\n'
            output.textContent+=el
        }))
    else 
        output.textContent = formattedText;
}