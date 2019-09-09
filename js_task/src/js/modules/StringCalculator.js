

export let Calculator = {
    exec(str){ //just test example
        getMethod = getMethod.bind(this);

        let arr = str.match(/[\d\.\d]*[+*-/%()]?/g);

        arr = arr.filter((el)=>el.length) //filter empty matches
        console.log(arr)

        let parenthesisLeftInd = arr.findIndex(el=>el == '(');
        if (parenthesisLeftInd >= 0){
            
            let parenthesisRightInd = arr.findIndex(el=>el == ')');
            arr.splice(parenthesisRightInd, 1)

            let innerArr = arr.splice(parenthesisLeftInd + 1 ,parenthesisRightInd - parenthesisLeftInd - 1);
            console.log(innerArr);

            replacePriorityOperations(innerArr);

            console.log(arr);

            arr[parenthesisLeftInd] = exec(innerArr)
        }

        replacePriorityOperations(arr)
        console.log(arr);

        return exec(arr);

        function getMethod(operator){
            switch (operator){
                case '+': return this.sum;
                case '-': return this.dif;
                case '*': return this.mult;
                case '/': return this.div;
                case '%': return this.divr;
            }
        }

        function exec(arr, start = 0, end = arr.length){
            console.log(arr)
            let result = arr[start];
            for (let i = start; i < end - 1; i+=2){
                result = getMethod(arr[i+1]).apply(this,[result, arr[i+2]]);
            }
            return result;
        }

        function replacePriorityOperations(arr){
            let priorOperatorInd = arr.findIndex(el=>el == ( '*' || '/' || '%' ));
            while(priorOperatorInd >= 0){
               let tmp = exec(arr, priorOperatorInd - 1, priorOperatorInd + 1);

               arr.splice(priorOperatorInd , 2);
               arr[priorOperatorInd - 1] = tmp;

               priorOperatorInd = arr.findIndex(el=>el == ( '*' || '/' || '%' ));
            }
        }
    },

    sum(a, b){
        return a - -b;
    },

    dif(a, b){
        return a - b;
    },

    mult(a, b){
        return a * b;
    },

    div(a, b){
        return a / b;
    },

    divr(a, b){
        return a % b;
    }
} 

let mathProps = Object.getOwnPropertyNames(Math);
for(let i of mathProps)
    Calculator[i] = castFloatDecorator(Math[i]);

function castFloatDecorator(func){
    return function(){
        let args = [...arguments].map((el)=>parseFloat(el));
        return func(...args)
    }
}
