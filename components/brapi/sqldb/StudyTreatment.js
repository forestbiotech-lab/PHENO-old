/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const StudyTreatment = sequelize.define('StudyTreatment', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    studyPlotId: DataTypes.INTEGER(11),
    treatmentModalityId: DataTypes.INTEGER(11),
  }, {
    tableName: 'StudyTreatment',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        StudyTreatment.belongsTo(models.StudyPlot, {
          foreignKey: 'studyPlotId',              //on StudyTreatment
          targetKey: 'id',  //foreign key  
        });
        StudyTreatment.belongsTo(models.TreatmentModality, {
          foreignKey: 'treatmentModalityId',              //on StudyTreatment
          targetKey: 'id',  //foreign key  
        }); 
      }
    },
  });

  return StudyTreatment;
};