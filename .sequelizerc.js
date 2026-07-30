// configurar nuestra base de datos
const path = require('path');
module.exports = {
    "config": path.resolve("src/database/config", "config.js"), // ruta del archivo de configuración de la base de datos
    "models-path": path.resolve("src/database/models"), // ruta de los modelos de la base de datos
    "seeders-path": path.resolve("src/database/seeders"), // ruta de los seeders de la base de datos
    "migrations-path": path.resolve("src/database/migrations") // ruta de las migraciones de la base de datos
}