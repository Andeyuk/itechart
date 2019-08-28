'use strict';

let input = document.getElementById('work-space__input');
let output = document.getElementById('work-space__output');

let ArrayProcessor = {};

function subSum(arr) {
    let curSum = 0;
    let index = 0;
    let i = 0;
    
    for (; i < arr.length; i++) {
        if (curSum + arr[i] >= curSum) {
            //   console.log('curSum + arr[i] >= curSum',curSum , arr[i]);
            curSum = curSum + arr[i];
            //   console.log(curSum)
            index = i;
        } else {
            console.log(
                curSum,
                arr[i],
                arr[i + 1],
                curSum + arr[i] + arr[i + 1] >= curSum 
                && curSum >= arr[i + 1] 
                && index + 1 == i,
                index + 1,
                i
            );
            if (
                curSum + arr[i] + arr[i + 1] >= curSum 
                && curSum >= arr[i + 1] 
                && index + 1 == i
            ) {
                console.log(
                    'curSum + arr[i] + arr[i+1]',
                    curSum,
                    arr[i],
                    arr[i + 1]
                );
                curSum = curSum + arr[i] + arr[i + 1];
                index = i + 1;
            } else {
                curSum = arr[i + 1] >= curSum ? arr[i + 1] : curSum;
            }
            i++;
        }
    }
    console.log(i-1);
    return curSum;
}
