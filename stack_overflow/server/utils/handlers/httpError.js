
const handleError = (error, res) => {
    console.log(error)
    res.status(error.statusCode || 500).send({message: error.message});
}

module.exports = handleError;