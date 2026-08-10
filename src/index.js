const express = require('express');
const globalConstants = require('./const/globalConstants');
const routerConfig = require('./routes/index.routes.js')
const errorHandler = require('./middlewares/error.js');
const createError = require('http-errors');

const configuracionApi = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

const configuracionRouter = (app) => {
    app.use('/api', routerConfig.rutas_init())
    app.use(function(req, res, next) {
        next(createError(404) ); // Manejo de rutas no encontradas
    })
    app.use(errorHandler);
}

const init = () => {
    const app = express(); //instancia de Express
    configuracionApi(app); // configura API
    configuracionRouter(app);
    app.listen(globalConstants.PORT);
    console.log('Aplicación ejecutandose en el puerto :' + globalConstants.PORT );
}

init();