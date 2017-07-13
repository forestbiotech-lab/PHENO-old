/**
 * Bruno Costa 13/07/2017 @ iBET
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    const GermplasmSynonym = sequelize.define('GermplasmSynonym', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        germplasmId: DataTypes.INTEGER(11),
        synonym: DataTypes.STRING(50),
    },{
        tableName: 'GermplasmSynonym',
        timestamps: false,
        underscored: false,

        classMethods: {
            associate: function associate(models) {
                GermplasmSynonym.belongsTo(models.Germplasm, {
                    foreignKey: 'germplasmId',  //on GermplasmSynonym
                    targetKey: 'id'
                });
            }
        }
    });

    return GermplasmSynonym;
};