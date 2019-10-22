// REVIEW: почему бы нам не хендлить ошибки прямо в контроллере? по сути эта функция - простая обертка над try-catch, она не инкапсулирует никакую логику
const processError = async (promise, errorHandler, ...params) => {
    try {
        return await promise(...params)
    } catch (error){
        errorHandler(error);
    }
}

module.exports = processError;
