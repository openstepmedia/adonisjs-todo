'use strict'

const Model = use('Model')

class Task extends Model {
  static boot () {
    super.boot()
    this.addTrait('ModelEvents')
  }     
}

module.exports = Task
