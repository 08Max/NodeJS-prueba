const router = require("express").Router()
const authController = require('../controllers/auth.controller.js')
const validate  = require('../middlewares/validate')
const authScheme = require('../middlewares/schemes/auth.scheme.js')

router.post('/login', validate(authScheme.login), authController.login)
// router.post('/registrarse', validate(authScheme.registrarse))

module.exports = router