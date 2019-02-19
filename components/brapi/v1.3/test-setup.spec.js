const sinon = require('sinon')
const chai = require('chai')
const getOptions= require('../helpers/getOptions')

beforeEach(function () {
	this.fakeReq=getOptions({})
})

afterEach(function () {
  //this.sandbox.restore()
})