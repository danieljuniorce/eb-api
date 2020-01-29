"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with batepontos
 */
const BatePonto = use("App/Models/BatePonto");

class BatePontoController {
  /**
   * Show a list of all batepontos.
   * GET batepontos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await BatePonto.all();
  }

  /**
   * Create/save a new bateponto.
   * POST batepontos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const {
      responsavel,
      p1,
      p2,
      p3,
      p4,
      presos,
      bankOrStore,
      abatidos,
      armasAprendidas,
      drograsAprendidas,
      startPtr,
      inicioPtr,
      fimPtr,
      pausaPtr,
      voltaPausaPtr,
      observacoes
    } = request.all();

    const batePonto = await BatePonto.create({
      responsavel,
      p1,
      p2,
      p3,
      p4,
      presos,
      bankOrStore,
      abatidos,
      armasAprendidas,
      drograsAprendidas,
      startPtr,
      inicioPtr,
      fimPtr,
      pausaPtr,
      voltaPausaPtr,
      observacoes
    });

    return batePonto;
  }

  /**
   * Display a single bateponto.
   * GET batepontos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const batePonto = await BatePonto.findBy("id", id);

    return batePonto;
  }

  /**
   * Update bateponto details.
   * PUT or PATCH batepontos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const batePonto = await BatePonto.findBy("id", params.id);

    const all = request.all();
    batePonto.merge(all);

    try {
      await batePonto.save();
      return batePonto;
    } catch (err) {
      return {
        message: "Erro atualizar o relatório"
      };
    }
  }

  /**
   * Delete a bateponto with id.
   * DELETE batepontos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    const batePonto = await BatePonto.find(id);

    await batePonto.delete();
  }
}

module.exports = BatePontoController;
