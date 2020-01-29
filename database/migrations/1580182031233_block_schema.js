"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BlockSchema extends Schema {
  up() {
    this.create("blocks", table => {
      table.increments();
      table.string("ip", 15).notNullable();
      table.boolean("situation").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("blocks");
  }
}

module.exports = BlockSchema;
