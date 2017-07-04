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