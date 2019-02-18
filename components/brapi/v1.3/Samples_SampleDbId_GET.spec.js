const expect = require('chai').expect
const assert = require('chai').assert

callName='Samples_SampleDbId_GET'
const call=require('./'+callName);
const structure=require('../structures/v1.3/Samples_SampleDbId');

describe('Testing the '+callName+' Call - ', async function() {
  var fakeReq
//  var callRes
  describe('Testing call:', async function() {
    it('generates an object', async function() {
      fakeReq=this.fakeReq
      callRes= await call(fakeReq)
      expect(callRes).to.be.a('object')
    });
  });
});