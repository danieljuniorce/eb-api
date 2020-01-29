"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello World in JSON" };
});

/**
 * Routes Manage User
 */
Route.get("/user", "UserController.index").middleware("auth");
Route.get("/user/:id", "UserController.show").middleware("auth");
Route.post("/user", "UserController.store");
Route.put("/user/:id", "UserController.update").middleware("auth");
Route.delete("/user/:id", "UserController.destroy").middleware("auth");

/**
 * Routes Manage Session Users
 */
Route.post("/user/login", "SessionController.login");
Route.post(
  "/user/changepassword",
  "SessionController.changePassword"
).middleware("auth");

/**
 * Routes Blocks
 */
Route.resource("/block", "BlockController")
  .apiOnly()
  .middleware("auth");

/**
 * Routes Relatorio
 */
Route.resource("/relatorio", "RelatorioController")
  .apiOnly()
  .middleware("auth");

/**
 * Routes BatePonto
 */
Route.resource("/bate-ponto", "BatePontoController")
  .apiOnly()
  .middleware("auth");

/**
 * Routes Atestado
 */
Route.resource("/atestado", "AtestadoController")
  .apiOnly()
  .middleware("auth");
