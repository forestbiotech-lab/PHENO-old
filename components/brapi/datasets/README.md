A side panel with all the tables

Institutions as affiliation, as germplasm doner. etc

Lazy loading with API calls specific for the intended table. Needs to pass a table to the model.

Problems getting the association with the program.
Needs to link all the way to the program
so it need to include all the middle tables. 

Always needs to process the whole query.

The idea is to have a side panel with a shortcut to show all tables involved directly. And a main one to transverse. Accordion style. Opening successive panels with complementary info.

Left side panel Tables 
Right panel open all studies open study etc. shit like that.


Dataset API it starts from table Program:
```
{
	Trial:{
        Study:{
            headers:['key1','key2','key3'],
            key1:"",
            key2:"",
            key3:""
        }    
    }
};
```


