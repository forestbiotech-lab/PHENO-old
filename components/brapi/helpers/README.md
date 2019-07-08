
##Default result structure:

```
metadata:{
	status: {},
	(...)
},
result: {
	data:[
		attr1:{},
		attr2:{}
	]
}

```
### How to output results as metadata or data

If you want to output the result as an object with the first result no data object in Result
This is processed in the formatingFunctions.

```
metadata:{
	status: {},
	(...)
},
result: {
	attr1:{},
	attr2:{}
}

```

place a metadataOnlyRemoveData:true element in the meatadata object in the call callback

example:
```
function callback(res){
  //[The attribute in main table used as uniqueId]
  var attribute="id"
    
    //Metadata
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var metadata={ metadataOnlyRemoveData:true }
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
  return {metadata:metadata,attribute:attribute,callStructure:callStructure};
}
```


Adding other types of metadata in the area should be kept. But might not be useful to place dynamic content.
