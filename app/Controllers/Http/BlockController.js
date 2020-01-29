"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with blocks
 */

const Block = use("App/Models/Block");

class BlockController {
  async index({ request, response, view }) {
    return await Block.all();
  }

  async store({ request, response }) {
    const { situation, ip } = request.all();

    const block = await Block.create({ ip, situation });

    if (!block) {
      return { message: "Erro ao adicionar o novo ip na lista de bloqueados" };
    }

    return block;
  }

  async show({ params }) {
    const { id } = params;

    const block = await Block.findBy("id", id);

    return block;
  }

  async update({ params, request, response }) {
    const block = await Block.findBy("id", params.id);

    const all = request.all();
    block.merge(all);

    try {
      await block.save();
      return block;
    } catch (err) {
      return {
        message: "Erro atualizar o usuário"
      };
    }
  }

  async destroy({ params, request, response }) {
    const { id } = params;
    const block = await Block.find(id);

    await block.delete();
  }
}

module.exports = BlockController;
