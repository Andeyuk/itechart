/** 
 * @param {number = 1, 2, 3, 4 | string = "symbol", "word", "sentence", "nowrap" , "none" or any other string} whiteSpace  
 */ 
export function textFormatter(string, maxLength, maxRows, whiteSpace) {
    if (
        (!maxLength && (whiteSpace != 3 || whiteSpace != 'sentence')) ||
        (whiteSpace == 4 || whiteSpace == 'nowrap')
    )
        return string;

    if (!maxRows) maxRows = Infinity;

    let rows = [];
    let shift = 0;
    //ignore max length coz it wouild be wrapped by symbol or word not sentence
    if (whiteSpace == 3 || whiteSpace == 'sentence')
        return string.match(/[^\.]+[\.]?[\ ]?/g);

    for (let i = 0; i < maxRows; i++) {
        let tmp = string.slice(
            i * (maxLength - 1) + shift,
            (i + 1) * (maxLength - 1) + shift
        );

        let rowEndIndex = (i + 1) * (maxLength - 1) + shift;

        if (rowEndIndex >= string.length) {
            rows.push(tmp);
            break;
        }

        let lastLetter = string[rowEndIndex];
        let preLastLetter = string[rowEndIndex - 1];
        
        if (lastLetter.match(/[a-zA-Z]/) && preLastLetter.match(/[a-zA-Z]/)) {
            if (whiteSpace == 'symbol' || whiteSpace == 1) tmp += '-';

            if (whiteSpace == 'word' || whiteSpace == 2) {
                let j = 1;

                //find space from the row end
                for (; lastLetter != ' ' && j < tmp.length; j++) {
                    lastLetter = tmp[tmp.length - j];
                }

                //cutting up to space character
                j -= 2;
                tmp = tmp.slice(0, -j);
                //shift index not to loose data
                shift -= j;
            }
        } else {
            if ( preLastLetter.match(/\s/) && lastLetter.match(/[a-zA-Z]/)
            || preLastLetter.match(/[a-zA-Z]/) && lastLetter.match(/\s/)){
                tmp += '';
            }
            else {
                tmp += lastLetter;
                shift++;
            }
        }

        rows.push(tmp);
    }

    return rows;
}
