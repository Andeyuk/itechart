export function numberConverter(arr, baseFrom, baseTo){
    arr = arr.join('');
    let decimal = parseInt(arr, baseFrom);
    let converted = decimal.toString(baseTo);
    return converted;
}