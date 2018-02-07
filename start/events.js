'use strict'

/*
|--------------------------------------------------------------------------
| Events
|--------------------------------------------------------------------------
|
*/

const Event = use('Event')

/**
 * see app/Repositories/TaskRepository.js
 * 
 * Event.when('task.created', 'Task.created') 
 * 
 * This is triggered by:
 * this.event.fire('task.created', task)
 * 
 * in TaskRepostory.js
 * 
 * The listener that gets fired is app/Listeners/Task.js
 * 
 */
Event.when('task.created', 'Task.created') 
Event.when('task.updated', 'Task.updated') 
Event.when('task.deleted', 'Task.deleted') 
Event.when('task.completed', 'Task.completed') 

