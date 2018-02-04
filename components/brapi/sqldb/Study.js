/* 
 * Created by Bruno Costa 24-07-2017 @iBET
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
    const Study = sequelize.define('Study', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: DataTypes.STRING(50),
        trialId: DataTypes.INTEGER(11),
        locationId: DataTypes.INTEGER(11),
        type: DataTypes.INTEGER(11),
        active: DataTypes.BOOLEAN(11),
    },{
        tableName: 'Study',
        timestamps: false,
        underscored: false,


        classMethods: {
            associate: function associate(models) {
                Study.belongsTo(models.StudyObservationVariable, {
                    foreignKey: 'id',       //on this table
                    targetKey: 'studyId',  
                });
                Study.belongsTo(models.Trial, {
                    foreignKey: 'trialId',
                    targetKey: 'id'
                });
/*                Study.belongsTo(models.ObservationVariable, {
                    foreignKey: 'observationVaribleId',  //on this table
                    targetKey: 'id'
                });*/
            }
        }
    });

    return Study;
};