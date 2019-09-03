function doSomething(name) {
    console.log('Hello, ' + name);
    return name;
}

function cache(func) {
    let cache = {};
    return function() {
        
        let sortedArgs = [...arguments].sort();
        if (sortedArgs in cache) {
            console.log('got from cache');
            return cache[sortedArgs];
        }

        cache[sortedArgs] = func.apply(this, arguments);
        return cache[sortedArgs];
    };
}

const wrapped = cache(doSomething);
