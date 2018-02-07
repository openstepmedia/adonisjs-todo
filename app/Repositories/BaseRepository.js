'use strict'

/*
|--------------------------------------------------------------------------
| BaseController
|--------------------------------------------------------------------------
|
| 
*/
const Event = use('Event')
const Config = use('Config')

class BaseRepository {
  constructor () {
    this.event = Event
    this.config = Config
  } 
  
  async errors () {}

  async all (related) {}

  async get (id, related) {}
    
  async getWhere (column, value, related) {}

  async getRecent (limit, related) {}

  async create (data) {}

  async update (data) {}

  async delete (data) {}

  async deleteWhere (data) {}
    
}

module.exports = BaseRepository
