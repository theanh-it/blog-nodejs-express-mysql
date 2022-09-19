var {check, validationResult} = require("express-validator");

module.exports = {
    create: [
        check("name").not().isEmpty(),
        check("description").not().isEmpty(),
        check("detail").not().isEmpty(),
        (request, response, next) => {
            const result = validationResult(request);
            if(!result.isEmpty()) return response.status(422).json({
                message: "error",
                result: result.errors
            });

            return next();
        }
    ]
}