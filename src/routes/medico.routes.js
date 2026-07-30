// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const medicoController = require('../controllers/medico.controller.js')
router.get('/prueba', medicoController.prueba)
router.get('/crear', medicoController.crear)
router.get('/:idMedico', medicoController.listarInfo)

module.exports = router