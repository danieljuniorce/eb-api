'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BatePontoSchema extends Schema {
  up () {
    this.create('bate_pontos', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('bate_pontos')
  }
}

module.exports = BatePontoSchema
