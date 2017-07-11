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
        callName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        dataType: DataTypes.INTEGER(11),
        method: DataTypes.INTEGER(11)
    },{
        tableName: 'Calls',
        timestamps: false,
        underscored: false,

// Not implementing all foreignKeys yet. Missing to obs table

        classMethods: {
            associate: function associate(models) {
                Calls.belongsTo(models.Methods, {
                    foreignKey: 'method'  //on Methods
                });
                Calls.belongsTo(models.DataType, {
                    foreignKey: 'dataType'  //on DataType
                });
            }
        }
    });

    return Calls;
};
