'use strict'

/*
|--------------------------------------------------------------------------
| Repositories
|--------------------------------------------------------------------------
|
| Repositories are used to abstract data access
| @see https://bosnadev.com/2015/03/07/using-repository-pattern-in-laravel-5/
| @read https://stackoverflow.com/questions/18817615/managing-relationships-in-laravel-adhering-to-the-repository-pattern#answer-18992000
|
| 
*/
const BaseRepository = use('App/Repositories/BaseRepository')
const Task = use('App/Models/Task')

class TaskRepository extends BaseRepository {

  async getCompleted() {
    const tasks = await Task
        .query()
        .orderBy('completed', false)
        .orderBy('updated_at', 'desc')
        .fetch()
    
    return tasks
  }        

  async getCountActive() {
    const active = await Task
        .query()
        .where('completed', false)
        .getCount()
    
    return active
  }
  
  async getCountComplete() {
    const complete = await Task
        .query()
        .where('completed', true)
        .getCount()
    
    return complete
  }
  
  async save(data) {
    if(data.id) {
      const task = await Task.findOrFail(data.id)
      task.merge(data)
      await task.save()
      this.event.fire('task.updated', task)
      return task
    } else {
      const task = await Task.create(data)
      this.event.fire('task.created', task)
      return task
    }
  }

  async delete(data) {
    const task = await Task.findOrFail(data.id)
    await task.delete()
    this.event.fire('task.deleted', task)
  }
}

module.exports = TaskRepository