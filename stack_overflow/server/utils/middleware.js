
const middlewareBuilder = (promise, params) => async (req, res, next) => {
    const boundParams = params ? params(req, res) : [];
    try {
        const result = await promise(...boundParams);
        next();
    } catch (err){
        console.error(err);
        res.status(err.status || 500).send(err);
    }
};
    

module.exports = middlewareBuilder;