'use strict' // para que no se pueda usar variables no definidas

module.exports = (sequelize, DataTypes) => {

    let Medico = sequelize.define('medico', { // defino el modelo de la tabla usuario
        id: {
            type: DataTypes.BIGINT, // tipo de dato
            autoIncrement: true, // autoincrementable
            primaryKey: true, // clave primaria
            allowNull: false // no permitir nulo
        },
        nombre: { // nombre de la columna
            type: DataTypes.STRING, // tipo de dato
            allowNull: false // no puede ser nulo
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        },
        edad: {
            type: DataTypes.BIGINT,
        },
        profesion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: { // fecha de creacion
            type: DataTypes.DATE, // tipo de dato
            field: 'created_at', // nombre de la columna
            defaultValue: DataTypes.NOW, // valor por defecto
            allowNull: false // no puede ser nulo
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: { // fecha de eliminacion
            type: DataTypes.DATE, // tipo de dato
            field: 'deleted_at' // nombre de la columna
        }
    }, {
        paranoid: true, // elimina los registros de forma logica
        freezeTableName: true, // no va a modificar el nombre de la tabla a plural
    })

    Medico.associate = models => {
        // aca se relacionan las tablas de la base de datos
    }

    return Medico
}

