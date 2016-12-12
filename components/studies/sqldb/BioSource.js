/**
 * Created by Bruno Costa 12-12-2016.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const BioSource = sequelize.define('BioSource', {
    BioSourceID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    Organism: DataTypes.STRING,
    Infraspecific_name: DataTypes.STRING,
    Time_factor: DataTypes.DATE,
    Life_stage: DataTypes.STRING,
    Material_source: DataTypes.STRING,
    Material_source_DOI: DataTypes.STRING,
    Derived_Material: DataTypes.STRING,
    GL_Latitude: DataTypes.STRING,
    GL_Longitude: DataTypes.STRING,
    GL_Altitude: DataTypes.STRING
    }, {
    tableName: 'BioSource',
    timestamps: false,
    underscored: true,

    classMethods: {
      associate: function associate(models) {     
        GeneralMetadata.belongsTo(models.Study, {
          foreignKey: 'BioSourceID',
        });
      }
    },
  });

  return BioSource;
};
