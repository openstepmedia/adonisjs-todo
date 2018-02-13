'use strict'

const Schema = use('Schema')

class SettingSchema extends Schema {
  up () {
    this.create('settings', (table) => {
      table.increments()

      table.string('package').nullable()
      table.string('group').default('config')
      table.string('key')
      table.text('value').nullable()
      table.string('type')
      table.string('environment').nullable()

      table.timestamps()
      table.dateTime('deleted_at').nullable()
    })
  }

  down () {
    this.drop('settings')
  }
}

module.exports = SettingSchema
