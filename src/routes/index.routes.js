// CONECTA TODA LAS RUTAS

const {Router} = require('express')
const usuarioRoutes = require('./usuario.routes.js')
const medicoRoutes = require('./medico.routes.js')
const pacienteRoutes = require('./paciente.routes.js')
const authRoutes = require('./auth.routes.js')
const rutas_init = () => {
    const router = Router()
    router.use('/usuarios', usuarioRoutes)
    router.use('/medicos', medicoRoutes)
    router.use('/pacientes', pacienteRoutes)
    return router
}
const rutas_auth = () => {
    const router = Router()
    router.use('/auth', authRoutes)
    return router
}
module.exports = { rutas_init, rutas_auth }