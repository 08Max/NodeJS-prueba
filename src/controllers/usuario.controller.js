const models = require('../database/models/index')
const errors = require('../const/errors');
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
    listarInfo: async (req,res,next) => {
        const usuario = await models.usuario.findOne({
            where: {
                id: req.params.usuarioId
            }
        })
        if (!usuario) return next(errors.UsuarioInexistente)
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
    subirArchivo: async (req, res, next) => {
        try {
            const usuario = await models.usuario.findOne({
                where: {
                    id: req.body.usuarioId
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente);
            const archivo = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })
            if (!archivo){
                const nuevoArchivo = await models.archivo_usuario.create({
                    nombre: req.body.nombre,
                    file: req.file ? req.file.filename : null,
                    original_name: req.file ? req.file.originalname : null,
                    usuarioId: req.body.usuarioId
                })
            }
            res.json({
                success: true,
                data: { message: "Archivo subido correctamente", }
            })

        } catch (error) {
            next(error);
        }
    },

    descargarArchivo: async (req,res,next) => {
        try {
            // verificar si el usuario existe en la base de datos
            const usuario = await models.usuario.findOne({
                where: {
                    id: req.body.usuarioId
                }
            })
            if (!usuario) return next(errors.UsuarioInexistente)
            // verificar si el archivo existe en la base de datos
            const archivo = await models.archivo_usuario.findOne({
                where: {
                    usuarioId: req.body.usuarioId,
                    nombre: req.body.nombre
                }
            })
            res.download('uploads/archivos-usuarios/' + archivo.file, archivo.original_name, (err) => {
                if (err) {
                    next(err);
                }
            })
        } catch (error) {
            next(error);
        }
    }
}