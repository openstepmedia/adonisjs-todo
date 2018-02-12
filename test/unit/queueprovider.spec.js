'use strict'

const { 
  test, 
  trait,
  before, 
  beforeEach, 
  after, 
  afterEach 
} = use('Test/Suite')('Bee Queue Provider')

const Queue = use('Bee/Queue')

/**
 * @see http://chaijs.com/api/assert/#method_assert
 * 
 */
test('add job to redis queue', async ({ assert }) => {
  const job = await Queue.get('addition')
    .createJob({ x: 2, y: 3 })
    .save()
  
  /**
   * @see: https://github.com/bee-queue/bee-queue
   */
  job.on('progress', (progress) => {
    console.log(`Job ${job.id} reported progress: ${progress}%`)
  });


  job.on('succeeded', (result) => {
    console.log(`Received result for job ${job.id}`);
    
  Queue.get('addition')
    .destroy((err) => {
      if (!err) {
        console.log('Queue was destroyed')
      }
    });
    
  });

  await Queue.get('addition')
    .process(async (job) => {
      console.log(`Processing job ${job.id}`)
    
      // do some work
      job.reportProgress(30)
      // do more work
      job.reportProgress(80)
      // do the rest
      //return done(null, job.data.x + job.data.y);
    });  
    
/*
  Queue.get('addition')
    .destroy((err) => {
      if (!err) {
        console.log('Queue was destroyed')
      }
    });
*/    
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
