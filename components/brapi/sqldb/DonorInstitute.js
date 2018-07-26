/**
 * Created by João M. F. Cardoso on 11/07/2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    const DonorInstitute = sequelize.define('DonorInstitute', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        germplasmId: DataTypes.INTEGER(11),
        donorGermplasmId: DataTypes.INTEGER(11),
        instituteId: DataTypes.INTEGER(11),
    },{
        tableName: 'DonorInstitute',
        timestamps: false,
        underscored: false,

// Not implementing all foreignKeys yet. Missing to obs table

        classMethods: {
            associate: function associate(models) {
                DonorInstitute.belongsTo(models.Institution, {
                    foreignKey: 'instituteId',  //on Calls
                    targetKey: 'id'
                });
                DonorInstitute.belongsTo(models.Germplasm, {
                    foreignKey: 'germplasmId',  //on Calls
                    targetKey: 'id'
                });
                DonorInstitute.belongsTo(models.DonorGermplasm, {
                    foreignKey: 'donorGermplasmId',  //on Calls
                    targetKey: 'id'
                });
            }
        }
    });

    return DonorInstitute;
};