module.exports = (scheme) => {
    return (req, res, next) => {
        let result = scheme.validate(req.body);
        if (result.error) {
            return res.status(400).json({
                error: result.error.details[0].message
            });
        }else {
            next();
        }
    }
}