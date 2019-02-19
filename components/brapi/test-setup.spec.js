const getOptions= require('./helpers/getOptions')

beforeEach(function () {
	this.fakeReq=getOptions({})
})

afterEach(function () {
  //this.sandbox.restore()
})