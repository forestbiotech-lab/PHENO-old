/**
 * Created by Bruno Costa 12-12-2016.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Germplasm = sequelize.define('Germplasm', {
    id: { //Foreign Key: Species | id ! Not implemented
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    speciesId: {  //Foreign Key species.
      type: DataTypes.INTEGER(11),
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
      type: DataTypes.STRING(100),
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
    }
  }, {
    tableName: 'Germplasm',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

    classMethods: {
      associate: function associate(models) {     
        Germplasm.belongsTo(models.Species, {
          foreignKey: 'speciesId',
        });
      }
    },
  });

  return Germplasm;
};

 