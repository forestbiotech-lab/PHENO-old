/**
 * Created by João M. F. Cardoso on 11/07/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    const Calls = sequelize.define('Calls', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: DataTypes.STRING(254),
        path: DataTypes.STRING(50),
    },{
        tableName: 'Calls',
        timestamps: false,
        underscored: false,

// Not implementing all foreignKeys yet. Missing to obs table

        classMethods: {
            associate: function associate(models) {
                Calls.belongsTo(models.Methods, {
                    foreignKey: 'id',  //on Methods
                    targetKey: 'callId',
                });
                Calls.belongsTo(models.DataTypes, {
                    foreignKey: 'id',  //on DataType
                    targetKey: 'callId',
                });
            }
        }
    });

    return Calls;
};
 