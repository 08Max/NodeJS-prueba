const models = require('../database/models/index')
module.exports = {
    listar: async (req,res) => {
        try {
            const medicos = await models.medico.findAll({
                    include: [{
                        model: models.paciente_medico,
                        include: [{
                            model: models.paciente
                        }]
                    }]
                }
            )

            res.json({
                success: true,
                data: {
                    medicos: medicos
                }
            })
        } catch (error) {
            return next(error);
        }
    },
    crear: async (req,res) => {
        const medico = await models.medico.create(req.body)
        /* cuando lo que viene en la request coincide con las columnas de la tabla,
        * sequelize lo va a mapear automaticamente y va a crear el registro en la tabla
        */
        res.json({
            success: true,
            data: {
                medico: medico
            }
        })
    },
    listarInfo: async (req,res) => {
        const medico = await models.medico.findOne({
            where: {
                id: req.params.idMedico
            }
        })
        res.json({
            success: true,
            data: {
                medico: medico
            }
        })
    },
    prueba: async (req,res) => {
        try {
            console.log("Ejecutando prueba medico")
            res.json({
                message: "Hola mundo"
            })
        }catch (e) {
            console.log(e)
        }
    },
}