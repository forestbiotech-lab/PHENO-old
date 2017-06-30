/**
 * Created by Bruno Costa 12-12-2016.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const BioSource = sequelize.define('Germplasm', {
    id: { //Foreign Key: Species | id ! Not implemented
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    speciesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    origin: { //Foreign Key Institution id ! Not implemented yet.
      type: DataTypes.INTEGER(50),
      allowNull: false,
    },
    defaultDisplayName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    assessionNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    germplasmPUI: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    }, 
    pedigree: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }, 
    seedSource: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }, 
    biologicalStatusOfAccessionCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }, 
    acquisitionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }, 

  
  

  
  
  
    : DataTypes.STRING,
    : DataTypes.DATE,
    : DataTypes.STRING,
    : DataTypes.STRING,
    : DataTypes.STRING,
    : DataTypes.STRING,
    GL_Latitude: DataTypes.STRING,
    GL_Longitude: DataTypes.STRING,
    GL_Altitude: DataTypes.STRING
    }, {
    tableName: 'BioSource',
    timestamps: false,
    underscored: true,

    classMethods: {
      associate: function associate(models) {     
        BioSource.belongsTo(models.Study, {
          foreignKey: 'BioSourceID',
        });
      }
    },
  });

  return BioSource;
};

  PRIMARY KEY (`id`)
);