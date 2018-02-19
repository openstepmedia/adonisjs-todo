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
  
  get data () {
    const requestBody = this.ctx.request.all()
    const sessionId = this.ctx.request.header('X-Session-Id')

    //can inject data into request here....
    console.log('ctx:%o', Object.keys(this.ctx))
    console.log('auth:%o', this.ctx.auth.user)

    const data = Object.assign({}, requestBody, { sessionId }, {user_id: this.ctx.auth.user.id})

    return data
  }
  
  async authorize () {
    return true
  }  
}

module.exports = TaskStore
