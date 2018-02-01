/* 
 * Created by Bruno Costa 25-01-2018 @iBET
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
    const StudyGermplasm = sequelize.define('StudyGermplasm', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        studyId: DataTypes.INTEGER(11),
        germplasmId: DataTypes.INTEGER(11),
    },{
        tableName: 'StudyGermplasm',
        timestamps: false,
        underscored: false,


        classMethods: {
            associate: function associate(models) {
                StudyGermplasm.belongsTo(models.Germplasm, {
                    foreignKey: 'germplasmId',       //on this table
                    targetKey: 'id',  
                });
                StudyGermplasm.belongsTo(models.Study, {
                    foreignKey: 'studyId',  //on this table
                    targetKey: 'id'
                });
            }
        }
    });

    return StudyGermplasm;
};