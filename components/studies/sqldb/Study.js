/**
 * Created by Manjesh on 14-05-2016.
 * Adapted by Bruno Costa on 30-11-2016
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Study = sequelize.define('Study', {
    StudyID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    EnvironmentGrowthFacilityID: DataTypes.INTEGER(11),
    EnvironmentRootingConditions : DataTypes.INTEGER(11),
    EnvironmentNutrientID: DataTypes.INTEGER(11),
    TreatmentID: DataTypes.INTEGER(11),
    ExperimentalDesignID : DataTypes.INTEGER(11),
    ObservedVarsID: DataTypes.INTEGER(11)
    }, {
    tableName: 'Study',
    timestamps: false,
    underscored: true,

    classMethods: {
      associate: function associate(models) {
        Study.belongsTo(models.Investigation, {
          foreignKey: 'InvestigationID',
        });

        Study.belongsTo(models.GeneralMetadata, {
          foreignKey: 'GeneralMetaDataID',
        });

        Study.belongsTo(models.BioSource, {
          foreignKey: 'StudyID',
        });
      },
    },
  });

  return Study;
};
