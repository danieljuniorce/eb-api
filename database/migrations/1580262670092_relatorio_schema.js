"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RelatorioSchema extends Schema {
  up() {
    this.create("relatorios", table => {
      table.increments();
      table.intenger("responsavel").notNullable();
      table.intenger("relatado").notNullable();
      table.string("observacao", 254).notNullable();
      table.boolean("status").defaultTo(false);
      table.boolean("edit").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("relatorios");
  }
}

module.exports = RelatorioSchema;
