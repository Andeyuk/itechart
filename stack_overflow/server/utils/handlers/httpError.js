
const handleError = (error, req, res) => {
    console.error(error, "dawdawdawd");
    res.status(error.status || 500).send({message: error.message});
}

module.exports = handleError;