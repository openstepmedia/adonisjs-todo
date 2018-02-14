'use strict'

const Model = use('Model')

/*
|--------------------------------------------------------------------------
| BaseModel
|--------------------------------------------------------------------------
|
| ref: https://forum.adonisjs.com/t/custom-serializer-strategy/702/2?u=techpop
|
*/
class BaseModel extends Model {
  static _bootIfNotBooted () {
    if (this.name !== 'BaseModel') {
      super._bootIfNotBooted()
    }
  }
}

module.exports = BaseModel
