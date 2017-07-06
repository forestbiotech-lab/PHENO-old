/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const SpeciesCrop = sequelize.define('SpeciesCrop', {
    id: { //Foreign Key: Species | id ! Not implemented
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
//      field: 'GermplasmId',
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    code: {  //foreignkey not implemented to id.Crop
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING(50),
    },
    locationId: DataTypes.INTEGER(11),
  }, {
    tableName: 'SpeciesCrop',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

   classMethods: {
      associate: function associate(models) {     
        Species.belongsTo(models.Germplasm, {
          foreignKey: 'id',
          targetKey: 'origin',
        });
      }
    },//*/
  });

  return SpeciesCrop;
};

 