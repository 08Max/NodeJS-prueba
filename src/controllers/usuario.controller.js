const models = require('../database/models/index')
module.exports = {
    listar: async (req,res) => {
        const usuarios = await models.usuario.findAll()
        res.json({
            success: true,
            data: {
                usuarios: usuarios
            }
        })
    },
    crear: async (req, res, next) => {
        try {
            const usuario = await models.usuario.create(req.body)
            res.json({
                success: true,
                data: { usuario: usuario }
            })
        } catch (error) {
            next(error);
        }
    },
    listarInfo: async (req,res) => {
        const usuario = await models.usuario.findOne({
            where: {
                id: req.params.idUsuario
            }
        })
        res.json({
            success: true,
            data: {
                usuario: usuario
            }
        })
    },
    prueba: async (req,res) => {
        try {
            console.log("Ejecutando prueba usuario")
            res.json({
                message: "Hola mundo"
            })
        }catch (e) {
            console.log(e)
        }
    },
}