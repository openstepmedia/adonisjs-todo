'use strict'

const { 
  test, 
  trait,
  before, 
  beforeEach, 
  after, 
  afterEach 
} = use('Test/Suite')('ModelEvents Trait')

const Task = use('App/Models/Task')
const Model = use('Model')
const Event = use('Event')

/**
 * @see http://chaijs.com/api/assert/#method_assert
 */
test('trait should be called after Model.create()', async ({ assert }) => {

  let testTask = await Task.create({name: 'some test task'})
  
  assert.include(testTask.name, 'afterCreateListener', 'task.name should contain string "afterCreateListener"')
  
  await testTask.delete()
})


before(async () => {

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
