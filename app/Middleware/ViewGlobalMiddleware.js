'use strict'
const moment = require('moment')
const Env = use('Env')
const View = use('View')

//wrap up https://github.com/caolan/forms/tree/master/lib
//import {string,number,email} from 'forms'

/*
|--------------------------------------------------------------------------
| ViewGlobalMiddleware
|--------------------------------------------------------------------------
|
| An alternative to using hooks for adding custom globals to view/edge templates
| However, the official way to extend views:
| ref: http://adonisjs.com/docs/4.1/views#_extending_views
|
*/
class ViewGlobalMiddleware {
  
  constructor() {
    
    View.global('currentTime', function () {
      return new Date().getTime()
    })
  
    View.global('currentYear', () => {
      return moment().format('YYYY')
    })

    View.global('inArray', (arr, needle) => {
      let i = arr.length
      while (i--) {
        if (arr[i] === needle) {
          return true
        }
      }
      return false
    })

    View.global('env', function (key) {
      return Env.get(key)
    }) 
  }
  
  async handle ({ request }, next) {
    await next()
  }
}

module.exports = ViewGlobalMiddleware
