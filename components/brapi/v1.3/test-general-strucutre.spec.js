const expect = require('chai').expect
const assert = require('chai').assert
const glob = require('glob')
const path = require('path')

calls=glob.sync(__dirname+'/!(*example*|*.spec*).js')
for (i in calls){
  var callName=path.basename(calls[i],".js")
  var call=require("./"+callName);
  describe('Testing the '+callName+' Call - ', async function() {
    var fakeReq
    var callRes
    describe('Testing call:', async function() {
      it('generates an object', async function() {
        fakeReq=this.fakeReq
        callRes= await call(fakeReq)
        expect(callRes).to.be.a('object')
      });
      it('has the right metadata structure',function(){
        let metadata=callRes.metadata
        assert.lengthOf(Object.keys(metadata),3)
        expect(metadata).to.have.property('status')
        expect(metadata).to.have.property('datafiles')
        expect(metadata).to.have.property('pagination')
      })
      it('result structure',function(){
        let res=callRes.result
        expect(res).to.have.property('data')
        expect(res.data).to.be.a('array')
      })
    });
  });
}