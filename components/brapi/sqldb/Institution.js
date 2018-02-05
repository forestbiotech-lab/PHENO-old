/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Institution = sequelize.define('Institution', {
    id: { //Foreign Key: Location ! Not implemented
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
    tableName: 'Institution',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

   classMethods: {
      associate: function associate(models) {     
        Institution.belongsTo(models.Germplasm, {
          foreignKey: 'id',
          targetKey: 'holdingInstitution',
        });
        Institution.belongsTo(models.Location, {
          foreignKey: 'locationId',
          targetKey: 'id',
        });
        Institution.belongsTo(models.Person, {
          foreignKey: 'id',              //on Institution
          targetKey: 'affiliation',  //foreign key  
        }); 
      }
    },//*/
  });

  return Institution;
};

 