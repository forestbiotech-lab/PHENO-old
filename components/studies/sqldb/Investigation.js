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
    TitleOfInvestigation:DataTypes.TEXT(tiny),
    DescriptionOfInvestigation:DataTypes.TEXT(long),
    SubmissionDate: DataTypes.DATE,
    PublicReleaseDate: DataTypes.DATE,
    AssociatedPublications: DataTypes.STRING,
    DataSubmitterContact: DataTypes.STRING,
    DataSubmitterID: DataTypes.STRING,
    ReplicatationHierarchy: DataTypes.STRING
  }, {
    tableName: 'oauth_access_tokens',
    timestamps: false,
    underscored: true,
    classMethods: {
      associate: function(models) {
      },
    },
  });

  return OAuthAccessToken;
};
