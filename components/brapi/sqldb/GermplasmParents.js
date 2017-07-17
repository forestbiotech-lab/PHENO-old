/**
 * Created by Bruno Costa 13-07-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const GermplasmParents = sequelize.define('GermplasmParents', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    parent1Id: DataTypes.INTEGER(11),
    parent2Id: DataTypes.INTEGER(11),
    childId: DataTypes.INTEGER(11),
  },{
    tableName: 'GermplasmParents', //foreigKey to Germplasm
    timestamps: false,
    underscored: false,


   classMethods: {
      associate: function associate(models) {     
        GermplasmParents.belongsTo(models.GermplasmParent1, {
          foreignKey: 'parent1Id',  //On GermplasmParents
        })
        GermplasmParents.belongsTo(models.GermplasmParent2, {
          foreignKey: 'parent2Id',  //On GermplasmParents
        })
        GermplasmParents.belongsTo(models.Germplasm, {//Repeated so this one is the one performed. Create a model for each parent.
          foreignKey: 'childId',  //On GermplasmParents
        })
      }
    },
  });

  return GermplasmParents;
};

