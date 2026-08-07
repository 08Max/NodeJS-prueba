const Joi = require('joi');

let crearUsuario = Joi.object({
    nombre: Joi.string().required(), // tipo de dato
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().optional(),
})

module.exports = {
    crearUsuario
}