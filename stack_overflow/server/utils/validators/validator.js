
const createError = require('http-errors');

//todo validation errors

const Validator = {
    checkExists(...fields){
        fields.forEach((el)=>{
            if (!el)
                throw new createError.UnprocessableEntity();
        })
    },
    checkType(field, type){
        if (typeof field !== type)
            throw new createError.UnprocessableEntity();
    },
    match(field, newField){
        if (field !== newField)
            throw new createError.UnprocessableEntity();
    }
}

module.exports = Validator;