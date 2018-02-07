'use strict'

/*
|--------------------------------------------------------------------------
| Hooks
|--------------------------------------------------------------------------
|
*/

const { hooks } = require('@adonisjs/ignitor')


hooks.after.providersBooted(() => {
  const View = use('View')

  /**
   * Create a custom view render function for edge templates
   *
   * ref: https://adonisjs.com/docs/4.0/views#_extending_views
   */
  View.global('currentTime', function () {
    return new Date().getTime()
  })
})