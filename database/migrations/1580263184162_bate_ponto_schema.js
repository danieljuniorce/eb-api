"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BatePontoSchema extends Schema {
  up() {
    this.create("bate_pontos", table => {
      table.increments();
      table.integer("responsavel").notNullable();
      table.integer("p1").notNullable();
      table.integer("p2").notNullable();
      table.integer("p3").notNullable();
      table.integer("p4").notNullable();
      table.decimal("presos").defaultTo(0);
      table.decimal("bankOrStore").defaultTo(0);
      table.decimal("abatidos").defaultTo(0);
      table.decimal("armasAprendidas").defaultTo(0);
      table.decimal("drograsAprendidas").defaultTo(0);
      table.date("startPtr").notNullable();
      table.time("inicioPtr").notNullable();
      table.time("fimPtr").notNullable();
      table.time("pausaPtr").nullable();
      table.time("voltaPausaPtr").nullable();
      table.string("observacoes", 254).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("bate_pontos");
  }
}

module.exports = BatePontoSchema;
