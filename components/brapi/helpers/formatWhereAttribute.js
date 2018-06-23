module.exports= function formatWhereAttribute(attribute,type){
  result={}
  if(typeof attribute == "string"){
    attribute=[attribute]
  }else if(typeof attribute == "object"){
    attribute=attribute || ""
  }
  if(attribute){
    result[type]=attribute;
    return result
  }
}