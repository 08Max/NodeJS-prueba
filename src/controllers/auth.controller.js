// Funcionamiento de todas las rutas de autenticacion

const models = require('../database/models/index.js') // importar el archivo de modelos
const errors = require('../const/errors.js') // importar el archivo de errores
const signJWT = require('../middlewares/signJWT.js') // importar la función para firmar el token
const bcrypt = require('bcryptjs') // importar bcrypt para encriptar la contraseña

module.exports = {
    login: async (req, res, next) => {
        try {
            // Verifico que el usuario exista solo comparando con el email
            const user = await models.usuario.findOne({
                where: {
                    email: req.body.email
                }
            })
            contraseniaCoincide = false;
            if (user) {
                contraseniaCoincide = await bcrypt.compare(req.body.password, user.password) // comparo la contraseña ingresada con la contraseña encriptada
            }
            if (!user || !contraseniaCoincide) return next(errors.CredencialesInvalidas) // si no existe el usuario o la contraseña no coincide, retorno un error
            res.json({
                success: true,
                data: {
                    token: signJWT(user), // genero el token con los datos del usuario
                    id: user.id,

                }
            })
        } catch (error) {
            next(error)
        }
    }
}