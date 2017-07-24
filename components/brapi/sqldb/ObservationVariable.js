/* 
 * Created by Bruno Costa 24-07-2017 @iBET
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
    const ObservationVariable = sequelize.define('ObservationVariable', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: DataTypes.STRING(50),
        ontologyId: DataTypes.INTEGER(11),
        growthStage: DataTypes.STRING(50),
        status: DataTypes.STRING(20),
        xref: DataTypes.STRING(50),
        institution: DataTypes.INTEGER(11),
        scientist: DataTypes.INTEGER(11),
        date: DataTypes.DATE(11),
        language: DataTypes.STRING(11),
        crop: DataTypes.INTEGER(11),
        traitId: DataTypes.INTEGER(11),
        methodId: DataTypes.INTEGER(11),
        scaleId: DataTypes.INTEGER(11),
        defaultValue: DataTypes.STRING(50),
    },{
        tableName: 'ObservationVariable',
        timestamps: false,
        underscored: false,


        classMethods: {
            associate: function associate(models) {
                ObservationVariable.belongsTo(models.StudyObservationVariable, {
                    foreignKey: 'id',       //on this table
                    targetKey: 'studyId',  
                });
/*                ObservationVariable.belongsTo(models.ObservationVariable, {
                    foreignKey: 'observationVaribleId',  //on this table
                    targetKey: 'id'
                });*/
            }
        }
    });

    return ObservationVariable;
};