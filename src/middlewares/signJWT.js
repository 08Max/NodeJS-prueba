const jwt = require('jsonwebtoken');
const globalConstants = require('../config/globalConstants.js');

module.exports = function (usuario){
    if (usuario) {
        // se crea el token con los datos de usuario y la clave secreta
        const token = jwt.sign({
            id: usuario.id,
            },
            globalConstants.JWT_SECRET, {
                expiresIn: '3000m' // tiempo de expiracion del token = 3Hs
            }
        )
        return token // devuelvo el token
    } else {
        return null // si no hay usuario devuelvo null
    }
}