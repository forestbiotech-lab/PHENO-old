/**
 * Created by João M. F. Cardoso on 11/07/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    const Calls = sequelize.define('Methods', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        method: DataTypes.INTEGER(11)
    },{
        tableName: 'Methods',
        timestamps: false,
        underscored: false,

// Not implementing all foreignKeys yet. Missing to obs table

        classMethods: {
            associate: function associate(models) {
                Calls.belongsTo(models.Calls, {
                    foreignKey: 'id',  //on Calls
                    targetKey: 'method'
                });
            }
        }
    });

    return Methods;
};