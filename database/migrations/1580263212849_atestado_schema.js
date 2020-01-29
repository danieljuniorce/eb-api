"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AtestadoSchema extends Schema {
  up() {
    this.create("atestados", table => {
      table.increments();
      table.intenger("solicitante").notNullable();
      table.string("motivo", 254).notNullable();
      table.string("tempo", 254).notNullable();
      table.intenger("visto").nullable();
      table.boolean("status").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("atestados");
  }
}

module.exports = AtestadoSchema;
