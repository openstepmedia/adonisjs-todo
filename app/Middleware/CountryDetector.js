'use strict'

const geoip = use('geoip-lite')

class CountryDetector {
  async handle ({ request }, next) {
    const ip = request.ip()
    request.country = geoip.lookup(ip).country
    
    // call next to advance the request
    await next()
  }
}

module.exports = CountryDetector
