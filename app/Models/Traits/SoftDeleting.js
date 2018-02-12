'use strict'

class SoftDeleting {

  register (Model, customOptions = {}) {
    const defaultOptions = {}
    const options = Object.assign(defaultOptions, customOptions)
    
    // Add an instance method
    Model.prototype.printDeletedAt = function () {
      console.log('printDeletedAt')
    }

    Model.prototype.runSoftDelete = function () {
      //let m = await this.query().where('id', this.id)
      
      if(!this.deleted_at) {
        this.deleted_at = new Date()
      }
      console.log('Model:%o', this)
    }

    // Add a static method
    Model.newAdminUser = function () {
      let m = new Model()
      m.isAdmin = true
      return m
    }
    
  }

}

module.exports = SoftDeleting
