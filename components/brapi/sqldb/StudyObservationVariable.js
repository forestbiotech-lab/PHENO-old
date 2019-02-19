/* 
 * Created by Bruno Costa 24-07-2017 @iBET
 */

'use strict';

module.exports = function(sequelize, DataTypes) {
    const StudyObservationVariable = sequelize.define('StudyObservationVariable', {
        id: { //Foreign Key: Species | and Obs table
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        studyId: DataTypes.INTEGER(11),
        observationVariableId: DataTypes.INTEGER(11),

    },{
        tableName: 'StudyObservationVariable',
        timestamps: false,
        underscored: false,
        classMethods: {
          associate: function associate(models) {
            StudyObservationVariable.belongsTo(models.Study, {
              foreignKey: 'studyId',  //on this table
              targetKey: 'id'
            });
            StudyObservationVariable.belongsTo(models.ObservationVariable, {
              foreignKey: 'observationVariableId',  //on this table
              targetKey: 'id'
            });
          }
        }
    });

    return StudyObservationVariable;
};