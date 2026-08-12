// RUTAS DE LOS USUARIOS
const router = require("express").Router()
const usuarioController = require('../controllers/usuario.controller.js')
const validate  = require('../middlewares/validate')
const usuarioScheme = require('../middlewares/schemes/usuario.scheme')
const globalConstants = require('../const/globalConstants.js')

var multer = require('multer');
var upload = multer({
    dest: 'uploads/archivos-usuarios/', // Carpeta donde se guardarán los archivos subidos
    limits: {
        fileSize: globalConstants.MAX_FILE_SIZE // Tamaño máximo del archivo en bytes
    }
});
router.post('/', validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.get('/listar', usuarioController.listar)
router.get('/:idUsuario', usuarioController.listarInfo)
router.get('/prueba', usuarioController.prueba)
router.post('/subirArchivo', upload.single('jpg'), usuarioController.subirArchivo) // Ruta para subir el archivo
router.post('/descargarArchivo', usuarioController.descargarArchivo) // Ruta para descargar el archivo

module.exports = router
