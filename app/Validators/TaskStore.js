'use strict'

/*
|--------------------------------------------------------------------------
| Validator
|--------------------------------------------------------------------------
|
| see start/routes.js for usage:
|
| Route
|  .resource('tasks', 'TaskController')
|  .validator(new Map([
|    [['tasks.store'], ['TaskStore']],
|    [['tasks.update'], ['TaskUpdate']]
|  ]))
|
| A complete guide on routing validation is available here.
| https://adonisjs.com/docs/4.0/validator#_route_validator
|
*/
class TaskStore {
  get rules () {

    console.log("ctx:%o", this.ctx.request.url())

    return {
      // validation rules
      name: 'required'
    }
  }
}

module.exports = TaskStore
