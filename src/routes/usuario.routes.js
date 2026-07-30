// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const usuarioController = require('../controllers/usuario.controller.js')
router.get('/prueba', usuarioController.prueba)
router.post('/crear', usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)

module.exports = router