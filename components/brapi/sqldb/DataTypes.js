/**
 * Created by João M. F. Cardoso on 11/07/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    const DataTypes_table = sequelize.define('DataTypes_table', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        callId: DataTypes.INTEGER(11),
        dataType: DataTypes.STRING(30),
    },{
        tableName: 'DataTypes',
        timestamps: false,
        underscored: false,

// Not implementing all foreignKeys yet. Missing to obs table

        classMethods: {
            associate: function associate(models) {
                DataTypes_table.belongsTo(models.Calls, {
                    foreignKey: 'callId',  //on Calls
                    targetKey: 'id'
                });
            }
        }
    });

    return DataTypes_table;
};