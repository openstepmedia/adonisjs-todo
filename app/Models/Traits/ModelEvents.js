'use strict'

/*
|--------------------------------------------------------------------------
| Trait ModelEvents
|--------------------------------------------------------------------------
|
| After every model commit function, trigger corresponding event.
|
| Create Listeners:
| file: app/Listeners/Setting.js
| 
| 'use strict'
| const Setting = exports = module.exports = {}
| Setting.functionCalledAfterCreate = async (model) => {
|     console.log("EventListener: Setting afterCreate id:", model.id)
| }
| 
| Map trait events to start/events.js
|
| file: start/events.js
|
| const Event = use('Event')
| Event.when(
|  'Setting.model_event.afterCreate',  <-- event being fired by model
|  'Setting.functionCalledAfterCreate' <-- listener that accepts Model as param
| ) 
| 
| 
| Inspired by:
| @see https://github.com/hnhdigital-os/laravel-model-traits
| 
*/
const Event = use('Event')

class ModelEvents {

  register (Model, customOptions = {}) {
    const defaultOptions = {}
    const options = Object.assign(defaultOptions, customOptions)

    const events = [
        'beforeCreate',
        'afterCreate',
        'beforeUpdate',
        'afterUpdate',
        'beforeDelete',
        'afterDelete'
    ]
    
    events.forEach((event) => {
      Model.addHook(event, function (modelInstance) {
        Event.fire(Model.name + '::' + event, modelInstance)
      })
    })    
  }
}

module.exports = ModelEvents
