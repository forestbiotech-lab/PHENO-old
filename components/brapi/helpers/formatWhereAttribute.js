Sequelize=require('sequelize');
const Op = Sequelize.Op;

module.exports= function formatWhereAttribute(attribute,operator){
  //http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operator=Op[operator]
  result={}
  if(typeof attribute == "string"){
    attribute=[attribute]
  }else if(typeof attribute == "object"){
    if( attribute instanceof Array ){
      let sanityCheck=[]
      for(a in attribute){
        let item=attribute[a]
        if(typeof item == "string") sanityCheck.push(item) 
      }        
      attribute=sanityCheck;
    }else{ //If it's not an array then it not within specs and should be empty to ensure sanity
      attribute=[""]
    }
  }
  if(attribute){
    result[operator]=attribute;
    return result
  }
}