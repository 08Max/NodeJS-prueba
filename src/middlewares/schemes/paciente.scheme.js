const Joi = require('joi');

let crearPaciente = Joi.object({
    nombre: Joi.string().required(), // tipo de dato
    apellido: Joi.string().required(),
    email: Joi.string().optional(),
    edad: Joi.number().optional(),
    obra_social: Joi.string().optional(),
    medicoId: Joi.number().required() // id del medico que crea el paciente
})

module.exports = {
    crearPaciente
}