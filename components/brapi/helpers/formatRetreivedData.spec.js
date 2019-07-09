const expect = require('chai').expect
const assert = require('chai').assert

//const app= require('./../helpers/formatRetreivedData')
const test=require('./formatRetreivedData');

describe('Main Function - formatRetreivedData', function() {
  describe('Is data being processed correctly in general?', function() {
    var processedData
    it('the function should generate an object', function() {
      processedData=test(this.arg,this.res)
      expect(processedData).to.be.a('object')
    });
    it('sets value to null when all values are are null in db',function(){
      assert.isNull(processedData.data[0].plantsArrayObj[0].testNull)
      assert.isNull(processedData.data[0].plantsArrayObj[0].testNullOnDiffAttribute)
      assert.isNull(processedData.data[0].plantsArrayObj[0].testNoColumn)
      assert.isNull(processedData.data[0].plantsArrayObj[0].testNoColumnDiffAttribute)
      //test on object value with attribute 

    });
    it('sets value to null when all values are are null in db in the 2nd copy',function(){
      assert.isNull(processedData.data[0].testNull)
      assert.isNull(processedData.data[0].testNullObject)
      assert.isNull(processedData.data[0].testNullOnDiffAttribute)
      assert.isNull(processedData.data[0].testNoColumn)
      assert.isNull(processedData.data[0].testNoColumnDiffAttribute)
      assert.isNull(processedData.data[0].testNoColumnDiffAttributeObject)
      //test on object value with attribute 

    });
    it('does multi table traversing work?', function() {
      assert.equal(processedData.data[0].plotDbId,"15")
      assert.equal(processedData.data[1].plotDbId,"18")
    });
    it('will it get the attribute from another table without it being defined explicitly?', function() {
      assert.equal(processedData.data[0].sampleType,"Cork plank");
      assert.equal(processedData.data[1].tissueType,"Cork Amadia");
    });
    it('will it build a string from multiple attributes?', function() {
      assert.equal(processedData.data[0].person,"Dr. Inês Chaves");
    });
    it('will it build a new array structure?', function() {
      let arrayObject=processedData.data[0].plantsArrayObj;
      expect(arrayObject).to.be.a('array')
      assert.lengthOf(arrayObject,2)
      assert.equal(arrayObject[0].sampleId,1);
      assert.equal(arrayObject[1].sampleId,2);
    });
    it('will it build a new array with dynamic keys?', function() {
      let dynamicObject=processedData.data[0].plantsDynamicArray;
      expect(dynamicObject).to.be.a('object')
      assert.equal(dynamicObject["Dr."],"Inês Chaves");
    });    
    it('will it parse value as a string',function(){
    //Test parse string
      assert.isString(processedData.data[0].observationUnitDbId)
    });
    it('will it parse value as a number',function(){
    //Test parse number
      assert.isNumber(processedData.data[0].observationUnitDbIdINT)
    }); 
    it("Does it get a value that wasn't found in first record",function(){
    //Value exists in on result but not in the other  FAILS
      assert.isNotNull(processedData.data[0].onlyInSecond)
      assert.equal(processedData.data[0].onlyInSecond,"Yes it can")
      assert.isNotNull(processedData.data[0].observationUnitName)
      assert.equal(processedData.data[0].observationUnitName,"Tree sample X")
    })   
    it("Does it get empty values",function(){
      assert.isNull(processedData.data[0].emptyValue)
    })
    it("Does it processed Boolean value well?",function(){
      assert.equal(processedData.data[0].booleanTest,"true")
      assert.equal(processedData.data[0].booleanTest2,"false")
    })

    //check how nulls and empty strings are extracted from db. "" in db will give a "" in result
  });
});