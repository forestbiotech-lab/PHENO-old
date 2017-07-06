/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Species = sequelize.define('Species', {
    id: { //Foreign Key: Species | Not implemented to GenomeMap
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    cropId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    genus: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    species: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    speciesAuthority: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    subtaxa: {
      type: DataTypes.STRING(50),
      allowNull: true,
    }, 
    subtaxaAuthority: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    tableName: 'Species',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

   classMethods: {
      associate: function associate(models) {     
        Species.belongsTo(models.Germplasm, {
          foreignKey: 'id',         //On species
          targetKey: 'speciesId',   //foreign key on Germplasm
        });
        Species.belongsTo(models.Crop, {
          foreignKey: 'cropId',    // On Species
        })
      }
    },//*/
  });

  return Species;
};

 