'use strict';
module.exports = {
    async up (queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('medico', 'profesion', {
                type: Sequelize.STRING,
                allowNull: true
            })
        ]);
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
