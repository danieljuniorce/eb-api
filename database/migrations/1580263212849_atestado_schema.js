'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AtestadoSchema extends Schema {
  up () {
    this.create('atestados', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('atestados')
  }
}

module.exports = AtestadoSchema
