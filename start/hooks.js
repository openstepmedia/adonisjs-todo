'use strict'

/*
|--------------------------------------------------------------------------
| Hooks
|--------------------------------------------------------------------------
|
*/

const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  
  /**
   * This is a little strange... middleware only runs on named routes, so what
   * happens if there is a 404 error because the client is invoking an undefined 
   * route? should the error handler invoke any other 
   * classes? 
   * 
   * In this example, ViewGlobalMiddleware defines our custom View.globals()
   * however in a 404 error, the middleware is not invoked. So we need to do this here...
   * or is this a duplicated effore? should we remove it from the kernel.js configuration?
   * 
   * ref: http://adonisjs.com/docs/4.1/http-context
   */
  //make('App/Middleware/ViewGlobalMiddleware')

})