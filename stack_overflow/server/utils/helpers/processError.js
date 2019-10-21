
const processError = async (promise, errorHandler, ...params) => {
    try {
        return await promise(...params)
    } catch (error){
        errorHandler(error);
    }
}

module.exports = processError;