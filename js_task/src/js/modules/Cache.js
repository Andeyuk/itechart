
export let Cache = {
    register: [],

    find(func){
        try{
            let a = this.register.find((el)=>el.origin.name == func.name);
            if (a)
                return a;
        }
        catch(err){
            console.error(err);
        }

    },

    reg (func, limit = Infinity, unitedStorage = true){
        let cache;
        let data = {};

        if (unitedStorage){
            let registredFunc = this.find(func);
            if (!registredFunc){
                cache = {};
                data.origin = func;
                data.cached = f;
                this.register.unshift(data);
            }
            else {
                cache = registredFunc.cached.getCache();
            }
        }
        else{
            cache = {};
            data.origin = func;
            data.cached = f;
            this.register.unshift(data);
        }

        function f() {
            let sortedArgs = [...arguments].sort();

            if (sortedArgs in cache) {
                console.log('got from cache');
                return cache[sortedArgs];
            }

            if (Object.keys(cache).length < limit){
                cache[sortedArgs] = func(...arguments);
                return cache[sortedArgs]
            }

            return func.apply(this,arguments);
        };

        f.getCache = () => cache;
        f.clearCache = () => {
            Object.keys(cache).forEach((el) => {
                delete cache[el]
            })
        };

        return f;
    },

    getCache(func){
        let f = this.find(func);

        if (f)
            return f.getCache();
    },

    clearCache(func){
        let f = this.find(func)

        if (f){
            f.clearCache()
        }
    }
}