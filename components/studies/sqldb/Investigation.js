/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';


module.exports = function(sequelize, DataTypes) {
  const Investigation = sequelize.define('Investigation', {
    InvestigationID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    TitleOfInvestigation:DataTypes.TEXT,
    DescriptionOfInvestigation:DataTypes.TEXT,
    SubmissionDate: DataTypes.DATE,
    PublicReleaseDate: DataTypes.DATE,
    AssociatedPublications: DataTypes.STRING,
    DataSubmitterContact: DataTypes.STRING,
    DataSubmitterID: DataTypes.STRING,
    ReplicationHierarchy: DataTypes.STRING
  }, {
    tableName: 'Investigation',
    timestamps: false,
    underscored: true,
    classMethods: {
      associate: function(models) {
      },
    },
  });

  return Investigation;
};
