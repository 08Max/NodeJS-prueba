const models = require('../database/models/index')
const errors = require('../const/errors');
module.exports = {
    listar: async (req,res) => {
        const paciente = await models.paciente.findAll()
        res.json({
            success: true,
            data: {
                paciente: paciente
            }
        })
    },
    crear: async (req, res, next) => {
        try {
            const paciente = await models.paciente.create(req.body)
            res.json({
                success: true,
                data: { paciente: paciente }
            })
        } catch (error) {
            next(error);
        }
    },
    listarInfo: async (req,res,next) => {
        const paciente = await models.paciente.findOne({
            where: {
                id: req.params.idPaciente
            },
            include: [{
                model: models.medico,
            }]
        })
        if (!paciente) return next(errors.UsuarioInexistente)
        res.json({
            success: true,
            data: {
                paciente: paciente
            }
        })
    },
    prueba: async (req,res) => {
        try {
            console.log("Ejecutando prueba paciente")
            res.json({
                message: "Hola mundo"
            })
        }catch (e) {
            console.log(e)
        }
    },
}