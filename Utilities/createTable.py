#!/usr/bin/env python3

######################################
# Created by "Bruno Costa"@INESC
#    2018/02/02
#
######################################


import re

table="Trial"
sqlFile="/home/brunocosta/Downloads/git/BrAPI/SQL/LATEST_dump.sql"


sql=open(sqlFile,"r")

for line in sql.readlines(): 
	print(line)

my_dict={'table': table}

result="""/**
 * Created by Bruno Costa 02-02-2018.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
  const %(table)s = sequelize.define('%(table)s', {
    id: { 
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
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
    tableName: '%(table)s',
    timestamps: false,
    underscored: false,

// Not implementing foreignKeys yet.

   classMethods: {
      associate: function associate(models) {     
        %(table)s.belongsTo(models.Germplasm, {
          foreignKey: 'id',
          targetKey: 'countryOfOrigin',
        });
      }
    },//*/
  });

  return %(table)s;
};""" % my_dict

print(result)