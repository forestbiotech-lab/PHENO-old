/**
 * Created by Manjesh on 14-05-2016.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const GeneralMetadata = sequelize.define('GeneralMetadata', {
    GeneralMetaDataID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    startOfStudy: DataTypes.DATE,
    endOfStudy: DataTypes.DATE,
    GeoLocation: DataTypes.STRING,
    ExperimentalSiteName: DataTypes.STRING,
    Latitude: DataTypes.STRING,
    Longitude: DataTypes.STRING,
    Altitude: DataTypes.INTEGER(20)
    }, {
    tableName: 'GeneralMetadata',
    timestamps: false,
    underscored: true,

    classMethods: {
      associate: function associate(models) {     
        GeneralMetadata.belongsTo(models.Study, {
          foreignKey: 'GeneralMetaDataID',
        });
      }
    },
  });

  return GeneralMetadata;
};
