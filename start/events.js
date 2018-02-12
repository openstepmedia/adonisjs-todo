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
Event.when('Task::beforeCreate', 'Task.beforeCreate') 
Event.when('Task::afterCreate', 'Task.afterCreate') 
Event.when('task.updated', 'Task.updated') 
Event.when('task.deleted', 'Task.deleted') 

Event.when('task.completed', 'Task.completed') 

Event.when('Setting.beforeCreate', 'Setting.beforeCreate') 
Event.when('Setting.afterCreate', 'Setting.afterCreate') 

