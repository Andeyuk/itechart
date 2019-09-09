export function numberConvert(arr, baseFrom, baseTo) {
    if (!arr) return arr;

    arr.forEach(el => {
        let decimalElem = parseInt(el, baseFrom);

        if (isNaN(decimalElem) && el)
            throw new TypeError(
                'Wrong base: digit "' + el + '" has no equivalent in ' + baseFrom + ' number system'
            );
    });

    arr = arr.join('');

    let decimal = parseInt(arr, baseFrom);
    let converted = decimal.toString(baseTo);

    return converted;
}
