/**
 * Created by Bruno Costa 04-06-2017.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define('Location', {
    id: { //Foreign Key: Location ! Not implemented
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
//      field: 'GermplasmId',
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: DataTypes.STRING(50),
    abbreviation: DataTypes.STRING(10),
    locationType: DataTypes.STRING(50),
    latitude: DataTypes.STRING(20),
    longitude: DataTypes.STRING(20),
    altitude: DataTypes.INTEGER,
    country: DataTypes.INTEGER(11),
  }, {
    tableName: 'Location',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

   classMethods: {
      associate: function associate(models) {     
        Location.belongsTo(models.Institution, {
          foreignKey: 'id',
          targetKey: 'locationId',
        });
       Location.belongsTo(models.Country, {
          foreignKey: 'country',
          targetKey: 'id',
        });
        Location.belongsTo(models.Study, {
          foreignKey: 'id',              //on Location
          targetKey: 'locationId',  //foreign key  
        });
        Location.belongsTo(models.LocationAdditionalInfo, {
          foreignKey: 'id',              //on Location
          targetKey: 'location',  //foreign key  
        });                
      }
    },//*/
  });

  return Location;
};

 