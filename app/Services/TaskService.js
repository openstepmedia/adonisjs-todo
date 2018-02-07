'use strict'

/*
|--------------------------------------------------------------------------
| TaskService
|--------------------------------------------------------------------------
|
| What is a service for?
|
| https://stackoverflow.com/questions/18817615/managing-relationships-in-laravel-adhering-to-the-repository-pattern#answer-18992000
|
*/
const Task = use('App/Models/Task')
const TaskRepository = make('App/Repositories/TaskRepository')
const moment = require('moment')

class TaskService {

  async save(data) {
    const task = await TaskRepository.save(data)
    return task
  }
}

module.exports = TaskService
