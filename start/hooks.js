const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const View = use('View')

  View.global('currentTime', function () {
    return new Date().getTime()
  })
})