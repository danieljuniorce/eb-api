"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", table => {
      table.increments();
      table.string("name", 254).notNullable();
      table.string("condinome", 30).notNullable();
      table
        .string("username", 80)
        .notNullable()
        .unique();
      table
        .string("email", 254)
        .notNullable()
        .unique();
      table.string("password", 60).notNullable();
      table.string("patente", 60).nullable();
      table.string("discordName", 60).notNullable();
      table.string("turno", 25).notNullable();
      table.date("birthday", 60).notNullable();
      table
        .decimal("idInGame")
        .notNullable()
        .unique();
      table.string("situation", 30).defaultTo("analise");
      table.string("acl").defaultTo("normal");
      table.string("ip", 15).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
