"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with relatorios
 */
const Relatorio = use("App/Models/Relatorio");

class RelatorioController {
  /**
   * Show a list of all relatorios.
   * GET relatorios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await Relatorio.all();
  }

  /**
   * Create/save a new relatorio.
   * POST relatorios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { responsavel, relatado, observacao } = request.all();
    let relatorio;

    if (responsavel !== relatado) {
      relatorio = await Relatorio.create({
        responsavel,
        relatado,
        observacao
      });
      return relatorio;
    }

    return {
      message: "Não pode fazer o relátorio para se mesmo!"
    };
  }

  /**
   * Display a single relatorio.
   * GET relatorios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const relatorio = await Relatorio.findBy("id", id);

    return relatorio;
  }

  /**
   * Update relatorio details.
   * PUT or PATCH relatorios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const relatorio = await Relatorio.findBy("id", params.id);

    const all = request.all();
    relatorio.merge(all);

    try {
      await relatorio.save();
      return relatorio;
    } catch (err) {
      return {
        message: "Erro atualizar o relatório"
      };
    }
  }

  /**
   * Delete a relatorio with id.
   * DELETE relatorios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const relatorio = await Relatorio.find(id);

    await relatorio.delete();
  }
}

module.exports = RelatorioController;
