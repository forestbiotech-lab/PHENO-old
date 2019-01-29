// test-setup.spec.js
const sinon = require('sinon')
const chai = require('chai')
const testdata= require('../tests/formatRetreivedData.testdata')

beforeEach(function () {
	//This is a structure json
	this.arg=testdata.arg
	//Database export
	this.res = testdata.res
  	//this.sandbox = sinon.createSandbox()
})

afterEach(function () {
  //this.sandbox.restore()
})