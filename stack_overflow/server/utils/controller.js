

const controllerBuilder = (promise, params) => async (req, res) => {
    const boundParams = params ? params(req, res) : [];
    try {
        const result = await promise(...boundParams);
        return res.json(result || { message: 'OK' });
    } catch (err){
        console.error(err);
        res.status(err.status || 500).send(err);
    }
};
    

module.exports = controllerBuilder;