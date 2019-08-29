'use strict';

let input = document.getElementById('work-space__input');
let output = document.getElementById('work-space__output');

input.addEventListener('change', function(){
    let numbers = this.value.match(/-?\d+/g);

    for(let i = 0; i < numbers.length; i++){
        numbers[i] = parseInt(numbers[i]);
    }
    output.textContent = ' ';
    output.textContent += Helpers.functionOutput(ArrayProcessor.subSum, numbers);
    output.textContent += Helpers.functionOutput(ArrayProcessor.getMaxSubSeq, numbers);
    output.textContent += Helpers.functionOutput(ArrayProcessor.getMaxSubSeq, numbers, false);
    output.textContent += Helpers.functionOutput(ArrayProcessor.getMax, numbers);
    output.textContent += Helpers.functionOutput(ArrayProcessor.getMin, numbers);
    output.textContent += Helpers.functionOutput(ArrayProcessor.getMedium, numbers);
});

let ArrayProcessor = {
    subSum(arr) {
        let curSum = 0;
        let lastElemIndex  = 0;

        for (let i = 0; i < arr.length; i++) {
            if (curSum + arr[i] >= curSum) {
                curSum = curSum + arr[i];
                lastElemIndex = i;
            } else {
                if (
                    arr[i] + arr[i + 1] >= 0
                    && curSum >= arr[i + 1] 
                    && lastElemIndex + 1 == i
                ) {
                    //case when subSum still inc
                    curSum = curSum + arr[i] + arr[i + 1];
                    lastElemIndex  = i + 1;
                } else {
                    //case when subArray inperupts 
                    curSum = arr[i + 1] >= curSum ? arr[i + 1] : curSum;
                }

                i++;
            }
        }
        return curSum;
    },
    getMax(arr){
        let arrSorted = arr.sort();
        return arrSorted[arrSorted.length-1];
    },
    getMin(arr){
        let arrSorted = arr.sort();
        return arrSorted[0];
    },
    getMedium(arr){
        let arrSorted = arr.sort();
        let len = arr.length;
        if (len % 2 == 0)
            return (arrSorted[len/2] + arrSorted[(len/2) - 1])/2;
        else  
            return arrSorted[(len - 1)/2];
    },
    getMaxSubSeq(arr, isIncreasing = true){
        let seqIncr = [];
        let seqDecr = [];
        let tmpSequence = [arr[0]];
        let curEl = arr[0];
        for (let i = 1; i < arr.length;){
            console.log('compare',curEl , arr[i] )
            while (curEl <= arr[i] && i < arr.length){
                console.log('compare',curEl , arr[i] )
                tmpSequence.push(arr[i]);
                curEl = arr[i];
                i++;
            }

            console.log('compare inc', tmpSequence, seqIncr)
            if (seqIncr.length < tmpSequence.length){
                seqIncr = [...tmpSequence];
            }
            tmpSequence = [curEl];
            console.log('reslt inc', tmpSequence, seqIncr, curEl, arr[i]);

            console.log('compare decr', curEl, arr[i] )
            while (curEl >= arr[i] && i < arr.length){
                tmpSequence.push(arr[i]);
                curEl = arr[i];
                i++;
                console.log('decr', curEl, arr[i])
            }

            console.log('compare dec', tmpSequence, seqDecr)
            if (seqDecr.length < tmpSequence.length){
                seqDecr = [...tmpSequence];
            }
            tmpSequence = [curEl];
            console.log('reslt dec', tmpSequence, seqDecr, curEl, arr[i])
        }
        if (seqIncr.length == 1) seqIncr.pop();
        if (seqDecr.length == 1) seqDecr.pop();
        return isIncreasing ? seqIncr : seqDecr;
    }
};

var Helpers = {
    funcPerformance(func, ...params){
        try{
            let timeBefore = performance.now() || Date.now();
            func(...params);
            let timeAfter = performance.now() || Date.now();
    
            return timeAfter - timeBefore;
    
        } catch(err){
            console.error('Helpers.funcPerformance error: ' + err.message);
        }
    },
    functionOutput(func, ...params){
        return `${func.name} result: ${func(...params)}\n`
    }
} 