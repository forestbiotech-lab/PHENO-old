/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const GermplasmStorage = sequelize.define('GermplasmStorage', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    code: { 
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    germplasmId: DataTypes.INTEGER(11),
  },{
    tableName: 'GermplasmStorage', //foreigKey to Germplasm
    timestamps: false,
    underscored: false,


   classMethods: {
      associate: function associate(models) {     
        GermplasmStorage.belongsTo(models.Germplasm, {
          foreignKey: 'germplasmId',  //On GermplasmStorage
        })
      }
    },
  });

  return GermplasmStorage;
};

