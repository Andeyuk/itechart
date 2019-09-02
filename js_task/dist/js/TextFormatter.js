/*
options {
    maxWidth,
    maxRows,
    whiteSpace
}
whiteSpace = symbol word line nowrap
*/

function textFormatter(string, maxLength, maxRows, whiteSpace){

    if (!maxLength) return string;
    if (!maxRows) maxRows = Math.round(string.length/(maxLength-1));

    let rows = []
    let shift = 0;
    for (let i = 0; i < maxRows; i++){
        let tmp = string.slice(
                i*(maxLength - 1) + shift,
                (i+1)*(maxLength - 1) + shift
            );
        
        if((i+1)*(maxLength - 1) + shift >= string.length ){
            rows.push(tmp);
            break;
        }

        let lastLetter = string[(i+1)*(maxLength - 1) + shift];
        
           
            let preLastLetter = string[(i+1)*(maxLength - 1) - 1 + shift];
            //console.log(tmp ,preLastLetter+lastLetter, lastLetter.match(/[a-zA-Z]/) && preLastLetter.match(/[a-zA-Z]/),preLastLetter.match(/\s/) && lastLetter.match(/[a-zA-Z]/) || preLastLetter.match(/\s/) && lastLetter.match(/[a-zA-Z]/));

            if ( lastLetter.match(/[a-zA-Z]/) && preLastLetter.match(/[a-zA-Z]/)){
                if (whiteSpace == 'symbol' || whiteSpace == 1)
                    tmp += '-';

                if (whiteSpace == 'word' || whiteSpace == 2){
                    console.log('word')
                    let j=0;
                    for (; lastLetter != ' '; j++){
                        if( j > (i+1)*(maxLength - 1) + shift){
                            break; //to do
                        }
                        lastLetter = string[(i+1)*(maxLength - 1) + shift - j];
                    }
                    console.log('tmp',tmp.slice(tmp.length - j, j - 1), tmp.length - j, j - 1, tmp.length, j);
                    tmp = tmp.slice(tmp.length - j, j - 1);
                }
            }
            else {
                if ((preLastLetter.match(/\s/) && lastLetter.match(/[a-zA-Z]/)))
                    tmp += ' ';
                else {
                    if (preLastLetter.match(/[a-zA-Z]/) && lastLetter.match(/\s/)){
                        tmp += ' ';
                        shift++;
                    }
                    else {
                        tmp += string[(i+1)*(maxLength - 1) + 1];
                        shift++;
                    }
                }
            }

        rows.push(tmp);
    }

    console.log(rows);
    return rows;
    }