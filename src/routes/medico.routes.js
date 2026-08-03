// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const medicoController = require('../controllers/medico.controller.js')
router.post('/', medicoController.crear)
router.get('/listar', medicoController.listar)
router.get('/:idMedico', medicoController.listarInfo)
router.get('/prueba', medicoController.prueba)

module.exports = router