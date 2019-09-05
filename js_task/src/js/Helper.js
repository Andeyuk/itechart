export let Helper = {
    funcPerformance(func, ...params) {
        try {
            let timeBefore = performance.now() || Date.now();
            func(...params);
            let timeAfter = performance.now() || Date.now();

            return timeAfter - timeBefore;
        } catch (err) {
            console.error('Helpers.funcPerformance error: ' + err.message);
        }
    },
    
    functionOutput(func, ...params) {
        return `${func.name} result: ${func(...params)}\n`;
    }
};