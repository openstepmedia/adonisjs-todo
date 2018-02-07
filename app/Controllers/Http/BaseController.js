'use strict'

/*
|--------------------------------------------------------------------------
| BaseController
|--------------------------------------------------------------------------
|
| 
*/
//example of using lodash merge in controllers
const { merge } = require('lodash')
const Event = use('Event')
const Config = use('Config')
const { validate } = use('Validator')

class BaseController {
  constructor () {
    this.event = Event
    this.config = Config
    this.validate = validate
    this.merge = merge
  }
  
}

module.exports = BaseController
