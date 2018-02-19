'use strict'

/*
|--------------------------------------------------------------------------
| BaseService
|--------------------------------------------------------------------------
|
| What is a service for?
|
| https://stackoverflow.com/questions/18817615/managing-relationships-in-laravel-adhering-to-the-repository-pattern#answer-18992000
|
*/
class BaseService {

  async getRepo () {
    return null
  }

  async delete(data) {
    const task = await TaskRepository.delete(data)
  }

  async firstOrFail(id) {
    const task = await Task.findOrFail(id)
    return task
  }
}

module.exports = TaskService
