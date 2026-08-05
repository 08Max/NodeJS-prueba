'use strict';
const models = require("../src/database/models/index");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return Promise.all(
        ([
          models.usuario.findOrCreate({
            where: {
                id: "3"
            },
            defaults: {
              nombre : "Usuario3",
              apellido : "JS",
              email : "prueba@prueba.com",
              edad: "26",
            }
          }),
          models.usuario.findOrCreate({
            where: {
                id: "4"
            },
            defaults: {
              nombre : "Usuario4",
              apellido : "JS",
              email : "prueba@prueba.com",
              edad: "26",
            }
          })
        ])
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
