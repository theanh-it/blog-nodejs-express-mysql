var {check, validationResult} = require("express-validator");

module.exports = {
    create: [
        check("username").not().isEmpty(),
        check("password").not().isEmpty(),
        check("fullname").not().isEmpty(),
        check("email").not().isEmpty(),
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