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
  });
});