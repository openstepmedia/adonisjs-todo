'use strict'

const Model = use('Model')

class Setting extends Model {
  static boot () {
    super.boot()
    this.addTrait('ModelEvents')
  }   
}

module.exports = Setting
