const Joi = require('joi');
exports.solvevalidator = (req, res, next)=>{

    const userSchema = Joi.object({
        operation_type: Joi.string().required().valid("addition","subtraction","multiplication"),
        x:Joi.number().required(),
        y:Joi.number().required(),
    });
    const {error, value} = userSchema.validate(req.body);
    if(error){
        console.log(error);
        return res.status(400).json(error);
    }
    if(value){
        next();
    }
}
