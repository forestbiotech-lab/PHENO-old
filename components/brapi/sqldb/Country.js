/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Country = sequelize.define('Country', {
    id: { //Foreign Key: Location
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
//      field: 'GermplasmId',
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name:{
      type: DataTypes.STRING(100),
    },
    code: {  //foreignkey not implemented to id.Crop
      type: DataTypes.INTEGER(3),
      allowNull: false,
    },
  }, {
    tableName: 'Country',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

   classMethods: {
      associate: function associate(models) {     
        Country.belongsTo(models.Germplasm, {
          foreignKey: 'id',
          targetKey: 'countryOfOrigin',
        });
      }
    },//*/
  });

  return Country;
};

 