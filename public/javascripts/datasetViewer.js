$(document).ready(function() {
    var exampleData={
        Trial:{
            Study:{
                headers:['key1','key2','key3'],
                key1:"",
                key2:"",
                key3:""
            }    
        }
    };
    $target=$('.content')
    
    $('.create-table').click(function(){
        $emptyTable=$('table.sample').clone().removeClass('d-none')
        $emptyTable.appendTo($target)

    })
    $('.create-table').click(function(){
        var obj=locateObject(exampleData,"Study")
        console.log(obj)
    })

    function buildTable(table,data){

    }

    function locateObject(object,target){
        //This should be a recursive function that goes through the Object until it find the target object. So
        // for all keys in object locate target
        // if key is target then 
        var keys=Object.keys(object);
        for (k in keys){
            let key=object[keys[k]];
            if(keys[k]==target){
                return key
            }else{
                if(typeof key == "object"){
                    return locateObject(key,target)                    
                }
            }
        }

    }
})
