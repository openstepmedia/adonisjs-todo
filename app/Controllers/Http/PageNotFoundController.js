'use strict'

/*
|--------------------------------------------------------------------------
| PageNotFoundController
|--------------------------------------------------------------------------
| This controller is attempting to use best practices by not including 
| the underlying Model
|
| Note that all controller validation is being done at the Route level Validator
| ref: https://adonisjs.com/docs/4.0/validator#_route_validator
|
*/
const BaseController = use('App/Controllers/Http/BaseController')

class PageNotFoundController extends BaseController {

  async index ({ view }) {

    /**
     * Render the view '404.index'
     *
     * ref: http://adonisjs.com/docs/4.0/views
     */    
    return view.render('404')      
  }   
}

module.exports = PageNotFoundController
