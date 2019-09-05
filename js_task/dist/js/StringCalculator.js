

export let Calculator = {
    exec(str='111.2222 + 2222.3333 * 3'){ //just test example
        getMethod = getMethod.bind(this);
        let arr = str.match(/([\d.]+)?[+*-/%]?/g);
        arr = arr.filter((el)=>el.length)
        let result = arr[0];

        for (let i = 1; i < arr.length - 1; i+=2){
            console.log(arr[i],result,arr[i+1])
            console.log(getMethod(arr[i]));

            result = getMethod(arr[i])(result, arr[i+1]);
        }
        return result;

        function getMethod(operator){
            switch (operator){
                case '+': return this.sum;
                case '-': return this.dif;
                case '*': return this.mult;
                case '/': return this.div;
                case '%': return this.divr;
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
