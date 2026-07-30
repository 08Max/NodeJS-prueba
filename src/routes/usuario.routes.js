// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const usuarioController = require('../controllers/usuario.controller.js')
router.get('/prueba', usuarioController.prueba)
router.get('/crear', usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)