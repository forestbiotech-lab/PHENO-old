/**
 * Created by Bruno Costa 17-07-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const GermplasmParent2 = sequelize.define('GermplasmParent2', {
    id: { //Foreign Key: for a germplasmParents
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    speciesId: {  //Foreign Key to species.
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    holdingInstitution: { //Foreign Key to Institution id
      type: DataTypes.INTEGER(50),
      allowNull: false,
    },
    defaultDisplayName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    accessionNumber: {
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
    },
    countryOfOrigin: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    tableName: 'Germplasm',
    timestamps: false,
    underscored: false,

// Not implementing all foreignKeys yet.

    classMethods: {
      associate: function associate(models) {     
        GermplasmParent2.belongsTo(models.GermplasmParents,{
          foreignKey: 'id',     //on GermplasmParent1
          targetKey: 'parent2Id',
        })
      }
    },
  });
  

  return GermplasmParent2;
};

 