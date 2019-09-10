
export let ArrayProcessor = {
    subSum(arr) {
        let curSum = 0;
        let lastElemIndex = 0;

        for (let i = 0; i < arr.length; i++) {
            if (curSum + arr[i] >= curSum) {
                curSum = curSum + arr[i];
                lastElemIndex = i;
            } else {
                if (
                    arr[i] + arr[i + 1] >= 0 &&
                    curSum >= arr[i + 1] &&
                    lastElemIndex + 1 == i
                ) {
                    //case when subSum still inc
                    curSum = curSum + arr[i] + arr[i + 1];
                    lastElemIndex = i + 1;
                } else {
                    //case when subArray inperupts
                    curSum = arr[i + 1] >= curSum ? arr[i + 1] : curSum;
                }

                i++;
            }
        }
        return curSum;
    },

    getMax(arr) {
        let arrSorted = [...arr].sort();
        return arrSorted[arrSorted.length - 1];
    },

    getMin(arr) {
        let arrSorted = [...arr].sort();
        return arrSorted[0];
    },

    getMedium(arr) {
        let arrSorted = [...arr].sort();
        let len = arr.length;
        if (len % 2 == 0)
            return (arrSorted[len / 2] + arrSorted[len / 2 - 1]) / 2;
        else return arrSorted[(len - 1) / 2];
    },

    getMaxSubSeq(arr) {
        let seqIncr = [];
        let seqDecr = [];
        let tmpSequence = [arr[0]];
        let curEl = arr[0];
        for (let i = 1; i < arr.length; ) {
            while (curEl <= arr[i] && i < arr.length) {
                tmpSequence.push(arr[i]);
                curEl = arr[i];
                i++;
            }

            if (seqIncr.length < tmpSequence.length) {
                seqIncr = [...tmpSequence];
            }
            tmpSequence = [curEl];

            //I need to skip decreasing seq, though i'd like to save it
            while (curEl >= arr[i] && i < arr.length) {
                console.log('compare decr', curEl, arr[i]);
                tmpSequence.push(arr[i]);
                curEl = arr[i];
                i++;
            }

            if (seqDecr.length < tmpSequence.length) {
                seqDecr = [...tmpSequence];
            }
            tmpSequence = [curEl];
        }

        if (seqIncr.length == 1) seqIncr.pop();
        if (seqDecr.length == 1) seqDecr.pop();
        return {seqIncr, seqDecr}
    },
    
    getMaxIncSubSeq(arr) {
        let seqIncr = [];
        let tmpSequence = [arr[0]];
        let curEl = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (curEl <= arr[i] ) {
                tmpSequence.push(arr[i]);
            } else {
                if (seqIncr.length < tmpSequence.length) {
                    seqIncr = [...tmpSequence];
                }
                tmpSequence = [arr[i]];
            }
            curEl = arr[i];
        }

        if (seqIncr.length < tmpSequence.length) {
            seqIncr = [...tmpSequence];
        }
        if (seqIncr.length == 1) seqIncr.pop();

        return seqIncr;
    }
};
