"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with atestados
 */
const Atestado = use("App/Models/Atestado");

class AtestadoController {
  /**
   * Show a list of all atestados.
   * GET atestados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await Atestado.all();
  }

  /**
   * Create/save a new atestado.
   * POST atestados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { solicitante, motivo, tempo } = request.all();

    const atestado = await Atestado.create({ solicitante, motivo, tempo });

    return atestado;
  }

  /**
   * Display a single atestado.
   * GET atestados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const atestado = await Atestado.findBy("id", id);

    return atestado;
  }

  /**
   * Update atestado details.
   * PUT or PATCH atestados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const atestado = await Atestado.findBy("id", params.id);

    const all = request.all();
    atestado.merge(all);

    try {
      await atestado.save();
      return atestado;
    } catch (err) {
      return {
        message: "Erro atualizar o relatório"
      };
    }
  }

  /**
   * Delete a atestado with id.
   * DELETE atestados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const atestado = await Atestado.find(id);

    await atestado.delete();
  }
}

module.exports = AtestadoController;
