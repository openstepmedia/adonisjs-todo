'use strict'

const BaseModel = use('App/Models/BaseModel')

class Task extends BaseModel {
  static boot () {
    super.boot()
    this.addTrait('ModelEvents')
  }     
  
  user () {
    return this.belongsTo('App/Models/User')
  }  
}

module.exports = Task
