// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const usuarioController = require('../controllers/usuario.controller.js')
router.get('/', usuarioController.prueba)
router.get('/', usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)