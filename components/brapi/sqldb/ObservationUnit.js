/**
 * Created by Bruno Costa 02-02-2018
 * Generated by Utilities/createTable.py
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const ObservationUnit = sequelize.define('ObservationUnit', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING(100),
    locationId: DataTypes.INTEGER(11),
  }, {
    tableName: 'ObservationUnit',
    timestamps: false,
    underscored: false,

   classMethods: {
      associate: function associate(models) {    
        ObservationUnit.belongsTo(models.Location, {
          foreignKey: 'locationId',              //on ObservationUnit
          targetKey: 'id',  //foreign key  
        });
        ObservationUnit.belongsTo(models.ObservationUnitXRef, {
          foreignKey: 'id',              //on ObservationUnit
          targetKey: 'observationUnitId',  //foreign key  
        });
        ObservationUnit.belongsTo(models.StudyObservationUnit, {
          foreignKey: 'id',              //on ObservationUnit
          targetKey: 'observationUnit',  //foreign key  
        }); 
      }
    },
  });

  return ObservationUnit;
};