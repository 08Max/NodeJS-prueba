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
    crear: async (req,res) => {
        const usuario = await models.usuario.create(req.body)
        /* cuando lo que viene en la request coincide con las columnas de la tabla,
        * sequelize lo va a mapear automaticamente y va a crear el registro en la tabla
        */
        res.json({
            success: true,
            data: {
                usuario: usuario
            }
        })
        // de lo contrario se debe pegarle manualmente a cada columna, el valor correspondiente del body
        // ejemplo:
        // res.json({
        //     success: true,
        //     data: {
        //         usuario: {
        //             id: usuario.id,
        //             nombre: req.body.nombre,
        //             apellido: req.body.apellido,
        //         }
        //     }
        // })
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