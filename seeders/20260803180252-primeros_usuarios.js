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
                id: "1"
            },
            defaults: {
              nombre : "Usuario1",
              apellido : "JS",
              email : "prueba@prueba.com",
              edad: "26",
              created_at: "2024-06-08 00:00:00",
                updated_at: "2024-06-08 00:00:00"

            }
          }

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
