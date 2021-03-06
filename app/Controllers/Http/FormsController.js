'use strict'

/*
 |--------------------------------------------------------------------------
 | FormsController
 |--------------------------------------------------------------------------
 |
 | wrapper for https://github.com/caolan/forms/tree/master/lib
 | 
 */
const Logger = use('Logger')
const Forms = use('Adonis/Addons/Forms')

class FormsController {
  async index( { view }) {

    let fields = {
      title: Forms.fields.string({
        required: true,
        widget: Forms.widgets.text({classes: ['input-with-feedback', 'form-control']}),
        errorAfterField: true,
        cssClasses: {
          label: ['control-label']
        }
      }),
      description: Forms.fields.string({
        errorAfterField: true,
        widget: Forms.widgets.text({classes: ['input-with-feedback', 'form-control']}),
        cssClasses: {
          label: ['control-label']
        }
      }),
      personal: {
        name: Forms.fields.string({
          required: true,
          label: 'Name',
          widget: Forms.widgets.text({classes: ['input-with-feedback', 'form-control']})
        }),
        address: {
          address1: Forms.fields.string({
            required: true,
            label: 'Address 1',
            widget: Forms.widgets.text({classes: ['input-with-feedback', 'form-control']})
          }),
          zip: Forms.fields.number({
            required: true,
            label: 'ZIP',
            widget: Forms.widgets.text({classes: ['input-with-feedback', 'form-control']})
          })
        }
      }
    }

    Logger.info("FormsController fields:%s", Object.keys(fields))

    let options = {}

    return view.render('forms', {
      fields: fields,
      options: options
    })
  }
}

module.exports = FormsController
