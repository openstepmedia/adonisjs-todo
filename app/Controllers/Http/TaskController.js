'use strict'

/*
|--------------------------------------------------------------------------
| TaskController
|--------------------------------------------------------------------------
|
|
*/
const BaseController = use('App/Controllers/Http/BaseController')
const TaskRepository = make('App/Repositories/TaskRepository')
const TaskService = make('App/Services/TaskService')

class TaskController extends BaseController {

  async index ({ view }) {
    const tasks = await TaskRepository.getCompleted()

    const stats = {
      allTasks: tasks.rows.length,
      active: await TaskRepository.getCountActive(),
      completed: await TaskRepository.getCountComplete(),
    }

    /**
     * Render the view 'tasks.index'
     * with the tasks fetched as data.
     *
     * ref: http://adonisjs.com/docs/4.0/views
     */    
    return view.render('tasks.index', { 
      tasks: tasks.toJSON(),
      stats: stats
    })      
  }   
  
  async create ({ view }) {
    /**
     * Render the view 'tasks.create'
     * This is not currently used
     *
     * ref: http://adonisjs.com/docs/4.0/views
     */      
    return view.render('tasks.create')
  }

  async store ({ session, request, response }) {
    const data = request.only(['name', 'note'])

    const task = await TaskService.save(data)

    session.flash({ success: 'Awesome!' })

    return response.redirect('/tasks')
  }  

  async delete ({ params, session, request, response }) {
    const data = Object.assign({}, params, request.all())

    await TaskService.delete(data)

    session.flash({ error: 'Task Deleted' })

    return response.redirect('/tasks')
  }  

  async update ({ params, session, request, response }) {
    const data = Object
      .assign({}, params, request.only(['name', 'note', 'completed']))

    const task = await TaskRepository.save(data)

    session.flash({ success: 'Task Updated!' })
    
    if(request.ajax()) {
      return response.redirect('/tasks', false, 201)
    }
    else {
      return response.redirect('/tasks')
    }
  }  

  async edit ({ params, view }) {
    const task = await TaskService.firstOrFail(params.id)
    /**
     * Render the view 'tasks.edit'
     * with the tasks fetched as data.
     *
     * ref: http://adonisjs.com/docs/4.0/views
     */  
    return view.render('tasks.edit', { task: task.toJSON() })
  }    
}


module.exports = TaskController
