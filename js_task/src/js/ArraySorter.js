let ArraySorter = {
    bubbleSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++)
                if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    insertionSort(arr){
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] <= arr[i+1]) continue;
            let j = i+1;
            do {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
                j--;
            } while (arr[j] < arr[j - 1] && j > 0);
        }
        return arr;
    },

    selectionSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let minInd = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) minInd = j;
            }

            [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
        }
        return arr;
    },

    mergeSort(arr) {
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

            return results;
        }
    }
};
