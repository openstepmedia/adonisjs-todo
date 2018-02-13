'use strict'

const { 
  test, 
  trait,
  before, 
  beforeEach, 
  after, 
  afterEach 
} = use('Test/Suite')('Soft Deleting Trait')

const setting = use('App/Models/Setting')

trait(function (suite) {
  suite.Context.getter('foo', () => {
    return 'bar'
  })
})

let testSetting = null

before(async () => {
  // executed before all the tests for a given suite
  //console.log("before()")
  testSetting = await setting.create({
    package: 'package',
    group: 'config',
    key: 'site_name',
    value: 'test site',
    type: 'text',
    environment: 'dev'
  })
})

beforeEach(async () => {
  // executed before each test inside a given suite
  //console.log("beforeEach()")
})

after(async () => {
  // executed after all the tests for a given suite
  //console.log("after()")
})

afterEach(async () => {
  // executed after each test inside a given suite
  //console.log("afterEach()")
})
