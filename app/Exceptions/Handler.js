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
     * ref: https://adonisjs.com/docs/4.0/views#_extending_views
     */
    if (error.status === 404) {
      return response
        .status(error.status)
        .send(view.render('404', {
          title: '404 not found',
          ctx: Object.keys(req),
        }))
    } 
    
    /**
     * ref: http://adonisjs.com/docs/4.1/upgrade-guide
     */
    return super.handle(...arguments)
  }
}

module.exports = ExceptionHandler
