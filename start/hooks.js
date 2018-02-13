'use strict'

/*
|--------------------------------------------------------------------------
| Hooks
|--------------------------------------------------------------------------
|
*/

const { hooks } = require('@adonisjs/ignitor')
const moment = require('moment')

hooks.after.providersBooted(() => {
  const View = use('View')
  const Env = use('Env')

  /**
   * Create a custom view render function for edge templates
   *
   * ref: https://adonisjs.com/docs/4.0/views#_extending_views
   */
  View.global('currentTime', function () {
    return new Date().getTime()
  })

  View.global('currentYear', () => {
    return moment().format('YYYY')
  })
    
    
  /**
   * Usage: {{ env('APP_URL') }}
   *
   * ref: https://adonisjs.com/docs/4.0/views#_extending_views
   * ref: http://adonisjs.com/docs/4.0/configuration-and-env#_environment_variables
   */
  View.global('env', function (key) {
    console.log("get env for:" + key + " val:" + Env.get(key))
    return Env.get(key)
  })
    
})