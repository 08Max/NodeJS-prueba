// CONECTA TODA LAS RUTAS

const {Router} = require('express')
const usuarioRoutes = require('./usuario.routes')
const medicoRoutes = require('./medico.routes')
const rutas_init = () => {
    const router = Router()
    router.use("/usuarios", usuarioRoutes)
    router.use("/medicos", medicoRoutes)
    return router
}
module.exports = { rutas_init }