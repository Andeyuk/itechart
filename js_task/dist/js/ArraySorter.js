let ArraySorter = {
    BubbleSort(arr){
        for ( let i = 0; i < arr.length - 1; i++){
            for ( let j = i + 1; j < arr.length; j++)
                if (arr[i] < arr[j]) 
                    [arr[i], arr[j]] = [arr[j], arr[i]]     
        }
        return arr;
    },
    SelectionSort(arr){
        for( let i = 0; i < arr.length - 1; i++){
            let minInd = i;
            for ( let j = i + 1; j < arr.length; j++){
                if (arr[i] > arr[j])
                    minInd = j;
            }
            [arr[i], arr[minInd]] = [arr[minInd], arr[i]]
        }
        return arr;
    }
}