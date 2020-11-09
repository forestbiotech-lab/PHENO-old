const fs=require('fs')

module.exports=function(file){
  return new Promise((res,rej)=>{
    fs.readFile(file,"utf8",(err,data)=>{
      if(err){
        rej(err)
      }else{
        let parsedData=parseFile(data)
        let package=packageData(parsedData)
        res(package)        
      }
    })    
  })
}



function parseFile(data){
  let result=[]
  data.split("\n").forEach(line=>{
    result.push(line.trim().split("\t"))
  })

  return result
}

function packageData(data){
  let packagedData={}
  let currentBlock=""
  data.forEach(line=>{
    let temp=detectType(line)
    if(typeof temp == "object"){
      if(Object.keys(temp).includes("header")){
        currentBlock=temp.header.text
        packagedData[currentBlock]=temp.header
        packagedData[currentBlock].body=[]
      }else if(Object.keys(temp).includes("line")){
        packagedData[currentBlock].body.push(temp.line)
      }      
    }
  })
  return packagedData

  function detectType(line){
    ({isHeader,headerId,headerText}=detectHeader(line))
    if(line.length==1){  
      if(isHeader==true){
        return {"header":{text:headerText,headerId}}
      }else{
        return {"split":{}} 
      }
    }else{
      if(isHeader==true){
        return {"header":{text:headerText,headerId}}
      }else{
        return {line}
      }
    }
  }

  function detectHeader(line){
    let re=new RegExp(/.*[bB]loc[ok]\W*([0-9]+)/)
    let foundHeader=false
    let headerId=null
    let text=null
    if(typeof line == "object"){
      line.forEach(item=>{
        if(isHeader(item)==true){
          foundHeader=true
          headerId=item.match(re)[1]
          text=item
        }
      })
    }else{
      if(isHeader(line)==true){
        headerId=item.match(re)[1]
        foundHeader=true
        text=line
      }
    }
    return {isHeader:foundHeader,headerId,headerText:text}
    
    function isHeader(text){
      let re = new RegExp(/.*[bB]loc[ok].*/)
      if(text.match(re)){
        return true
      }else{
        return false
      }
    }

  }
}

