/**
 * Created by João M. F. Cardoso on 11/07/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    const Methods = sequelize.define('Methods', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        callId: DataTypes.INTEGER(11),
        method: DataTypes.STRING(30),
    },{
        tableName: 'Methods',
        timestamps: false,
        underscored: false,

// Not implementing all foreignKeys yet. Missing to obs table

        classMethods: {
            associate: function associate(models) {
                Methods.belongsTo(models.Calls, {
                    foreignKey: 'callId',  //on Calls
                    targetKey: 'id'
                });
            }
        }
    });

    return Methods;
};