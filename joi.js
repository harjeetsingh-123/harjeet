const Joi = require('joi');
const listingSchema= Joi.object({
    listing: Joi.object({
        title:Joi.string().required(),
        description:Joi.string().required(),
        image:Joi.string(). allow("",null),
        price:Joi.number().required(),
        location:Joi.string().required(),
        country:Joi.string().required()
    })
    .required()
});

module.exports=listingSchema;



module.exports.reviewSchema=Joi.object({
    review: Joi.object({
        Comment:Joi.string().required(),
        Rating:Joi.number().required().min(1).max(5),

    }).required()
});