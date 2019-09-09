import  { numberConvert as NC } from '../modules/BinaryConverter'

export function BinaryConverter_input_action(input, args, output){

    let numbers = input.value.match(/-?[\da-zA-Z]/g);
    let params = args.map((el)=>el.value);


    try{
        output.textContent = NC(numbers,...params);
    }
    catch(err){
        output.textContent = err;
    }
}