export let ArraySorter = {
    bubbleSort(arr, comparator) {
        let checker;
        if (comparator) checker = comparator;
        else checker = (a,b)=>a-b

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++)
                if (checker(arr[i], arr[j]) > 0) [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    insertionSort(arr, comparator){
        let checker;
        if (comparator) checker = comparator;
        else checker = (a,b)=>a-b

        for (let i = 0; i < arr.length - 1; i++) {
            if (checker(arr[i], arr[i+1]) <= 0) continue;
            let j = i+1;
            do {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                j--;
            } while (checker(arr[j], arr[j - 1]) < 0 && j > 0);
        }
        return arr;
    },

    selectionSort(arr, comparator) {
        let checker;
        if (comparator) checker = comparator;
        else checker = (a,b)=>a-b

        for (let i = 0; i < arr.length - 1; i++) {
            let minInd = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (checker(arr[i], arr[j]) > 0) minInd = j;
            }

            [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
        }
        return arr;
    },

    mergeSort(arr, increasing = true) {
        if (arr.length <= 1) {
            return arr;
        }

        let middle = Math.floor(arr.length / 2);

        let left = arr.slice(0, middle);
        let right = arr.slice(middle);

        return merge(this.mergeSort(left), this.mergeSort(right));

        function merge(left, right) {
            let leftIndex = 0;
            let rightIndex = 0;
            let results = [];

            if(increasing)
                while (leftIndex < left.length || rightIndex < right.length) {
                    if (leftIndex === left.length) {
                        results.push(right[rightIndex]);
                        rightIndex++;
                    } else if (
                        rightIndex === right.length ||
                        left[leftIndex] <= right[rightIndex]
                    ) {
                        results.push(left[leftIndex]);
                        leftIndex++;
                    } else {
                        results.push(right[rightIndex]);
                        rightIndex++;
                    }
                }
            else 
                while (leftIndex < left.length || rightIndex < right.length) {
                    if (leftIndex === left.length) {
                        results.unshift(right[rightIndex]);
                        rightIndex++;
                    } else if (
                        rightIndex === right.length ||
                        left[leftIndex] <= right[rightIndex]
                    ) {
                        results.unshift(left[leftIndex]);
                        leftIndex++;
                    } else {
                        results.unshift(right[rightIndex]);
                        rightIndex++;
                    }
                }

            return results;
        }
    }
};
