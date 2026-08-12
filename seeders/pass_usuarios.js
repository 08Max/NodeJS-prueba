'use strict';
const models = require('../models/index.js');
const bcrypt = require('bcryptjs');
module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.usuario.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    nombre: "Admin",
                    apellido: "Admin",
                    email: "algo@gmail.com",
                    edad: 30,
                    password: bcrypt.hashSync('password',10)
                }
            })
        ])
    }
}