/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Species = sequelize.define('Species', {
    id: { //Foreign Key: Species | id ! Not implemented
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    cropId: {  //foreignkey not implemented to id.Crop
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
    }
  }, {
    tableName: 'Species',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

   classMethods: {
      associate: function associate(models) {     
        Species.belongsTo(models.Germplasm, {
          foreignKey: 'id',
        });
      }
    },//*/
  });

  return Species;
};

 