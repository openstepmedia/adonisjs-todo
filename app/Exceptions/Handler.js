'use strict'

/*
|--------------------------------------------------------------------------
| Global Exception Handler
|--------------------------------------------------------------------------
| 
| ref: http://adonisjs.com/docs/4.1/exceptions
|
*/
const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use('Env')

class ExceptionHandler extends BaseExceptionHandler {

  /*
   * 
   * @param {type} error    //class HttpException
   * @param {type} request  //class Request
   * @param {type} response //class Reponse
   * @param {type} session  //class Session
   * @param {type} view     //class Template
   * @param {type} auth     //class Auth
   * @param {type} req      //class IncomingMessage
   * @param {type} res      //class ServerReponse
   * @returns {undefined}
   */
  async handle (error, { request, response, session, view, auth, req, res}) {
    
    if (error.code === 'EBADCSRFTOKEN') {
      response.forbidden('Cannot process your request.')
      return
    }

    /**
     * Show all parameter info passed into the handle() function
     * @type Array
     */
    const args = [error, request, response, session, view, auth, req, res]
    
    args.forEach((arg) => {
      console.log('name:' + arg.constructor.name)
      console.log(Object.keys(arg))
      console.log('==============================================')
    })
   
    /**
     * Add logic for 404 page not found
     * Create a custom view render function for edge templates
     * 
     * In order for this to work, must set .env file key:
     * PAGE_NOT_FOUND_CONTROLLER=true
     *
     * If the response.route() method is used, then all middleware will be available
     */
    if (error.status === 404) {
      if(Env.get('PAGE_NOT_FOUND_CONTROLLER') === 'true') {
        return response.route('pagenotfound', request.all())
      }

      /*
       * Alternate implementation:
       * ref: https://adonisjs.com/docs/4.1/exceptions
       * ref: https://forum.adonisjs.com/t/issues-with-exception-handling-in-v4-1/751/7
      return response
        .status(error.status)
        .send(view.render('404', {
          title: '404 not found'
        }))
      */
    } 
    
    /**
     * ref: http://adonisjs.com/docs/4.1/upgrade-guide
     */
    return super.handle(...arguments)
  }
}

module.exports = ExceptionHandler
