              //Get structure from YAML??? Should be done by grunt maybe??? 

        //Build skeleton and set values to string name of attribute if in the same table
        // a new object needs the _table key added with the respective table name
        // attributes that are the same set to ""
        // attributes from other tables need object with _table [_attribute]

Root of Object 
===============

Each key that has a string as a value with be filled with the value of the root table with the 

"""
{
	key:''
}
"""
key will be filled with the value of the attribute "key" in the current table

"""
{
	key:'name'
}
"""
key will be filled with the value of the attribute "name" in the current table

"""
{
	key: {_table:'table2',_attrubute:'name'}
}
"""
Key will be filled with the value of the attribute "name" in table "table2"
"""
{
	key: {_table:['table2','table3'],_attrubute:'name'}
}
"""
Key will be filled with the value of the attribute "name" in table "table3". The array of table in _table must be sequentially traversed throughout the foreign key coupling the tables.
"""
{
	key: '',
	key2:{
		_table:"table2",
		id:"",
		name:'person',
		formula:{_table:''}
	}
}
"""

"""
{
	key: '',
	key2:[{
			_table:"table2",
			_model:{
				_table:"",
				id:"",
				name:'person',
				formula:{_table:''}
			}
		}]
}
"""

"""
{
	key: '',
	key2:[{
			_table:"table2",
			_attribute:"name"
		}]
}
"""

"""
{
	key: '',
	key2:[{
			_table:"table2",
			_attribute:{
				_joiner:"=",
				attributes:["name","id"]
			}
		}]
}
"""