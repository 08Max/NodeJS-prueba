// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const usuarioController = require('../controllers/usuario.controller.js')
const validate  = require('../middlewares/validate')
const usuarioScheme = require('../middlewares/schemes/usuario.scheme')

router.post('/', validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.get('/listar', usuarioController.listar)
router.get('/:idUsuario', usuarioController.listarInfo)
router.get('/prueba', usuarioController.prueba)

module.exports = router
