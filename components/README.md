# Handling database tables 

database connection is done by [sequelize](http://docs.sequelizejs.com/)

studies - new implementation of db calls

oauth - Auth implementation for authenticated calls.

brapi - Current implementation to current database schema.

	exampleCall.js connection between the route and database
	model perform the queries to the database
	sqldb has files with the tables described.
		index.js has the database configuration files and all the tables
		foreignkeys: should be name with belongsTo in both associated tables. With the attribute that has a foreign key.::

		    classMethods: {
     		  associate: function associate(models) {     
        		[ThisTable].belongsTo(models.[foreignTable], {
          			foreignKey: '[attr form this table]',
        	    });
      		  }
            },



### How to add a table

Create a file with the table name in the appropriate schema directory:

#### Substitute [TableName] [ForeignTable] [attrOnThisTable] [attrOnForeignTable]::

	Componentes/[schema]/sqldb/[TableName].js

	'use strict';

	module.exports = function(sequelize, DataTypes) {
	  const [TableName] = sequelize.define('[TableName]', {
	    id: { //The primaryKey
	      type: DataTypes.INTEGER(11),
	      autoIncrement: true,
	      primaryKey: true,
	      allowNull: false,
	      unique: true,
	    },
	    attr1:{
	      type: DataTypes.STRING(100),
	    },
	    attr2: {  
	      type: DataTypes.INTEGER(3),
	      allowNull: false,
	    },
	  }, {
	    tableName: '[TableName]',
	    timestamps: false,
	    underscored: false,

	// Not implementing foreignKeys yet.

	   classMethods: {
	      associate: function associate(models) {     
	        [TableName].belongsTo(models.[ForeignTable], {
	          foreignKey: '[attrOnThisTable]',
	          targetKey: '[attrOnForeignTable]',
	        });
	      }
	    },//*/
	  });

	  return [TableName];
	};


