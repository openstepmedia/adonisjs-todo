'use strict'

class TestController {
  async index ({ view }) {
    return view.render('test')
  }
}

module.exports = TestController
