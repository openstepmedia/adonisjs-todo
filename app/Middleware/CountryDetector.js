'use strict'

const geoip = use('geoip-lite')

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
|
| ref: http://adonisjs.com/docs/4.1/middleware#_creating_middleware
|
*/
class CountryDetector {
  async handle ({ request }, next) {
    const ip = request.ip()
    
    try {
      request.country = geoip.lookup(ip).country
    } catch (err) {
      /**
       * local vm throws an error.
       * @type type
       */
      console.error("Could not determine country for ip:" + ip + " error:", err)
    }
    
    // call next to advance the request
    await next()
  }
}

module.exports = CountryDetector
