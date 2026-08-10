// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const pacienteController = require('../controllers/paciente.controller.js')
const validate  = require('../middlewares/validate')
const pacienteScheme = require('../middlewares/schemes/paciente.scheme')

router.post('/', validate(pacienteScheme.crearPaciente), pacienteController.crear)
router.get('/listar', pacienteController.listar)
router.get('/:idPaciente', pacienteController.listarInfo)
router.get('/prueba', pacienteController.prueba)

module.exports = router
