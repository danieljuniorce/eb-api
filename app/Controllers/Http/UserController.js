"use strict";
const User = use("App/Models/User");
const Database = use("Database");

class UserController {
  async index() {
    return await User.all();
  }

  async show({ params }) {
    return await Database.table("users").where("id", params.id);
  }

  async store({ request }) {
    /**
     * Verificação de ip bloqueado no banco de dados blocks
     */
    const ip = request.ip();
    const ipBlock = await Database.table("blocks").where("ip", ip);

    if (
      Array.isArray(ipBlock) &&
      ipBlock.length &&
      ipBlock[0].situation !== true
    ) {
      return {
        message: "Seu ip foi bloqueado, e não é possível cadastrar novamente"
      };
    }

    /**
     * Cadastro de novos usuários
     */
    const {
      name,
      condinome,
      username,
      email,
      password,
      patente,
      discordName,
      turno,
      birthday,
      idInGame
    } = request.all();

    try {
      const user = await User.create({
        name,
        condinome,
        username,
        email,
        password,
        patente,
        discordName,
        turno,
        birthday,
        idInGame,
        ip
      });

      if (!user) {
        return {
          message: "Usuário não foi cadastrado"
        };
      }

      return user;
    } catch (err) {
      return {
        message:
          "Informações cadastradas já existe ou faltou algumas informações",
        err
      };
    }
  }

  async update({ request, params }) {
    const user = await User.findBy("id", params.id);

    const all = request.all();
    user.merge(all);

    try {
      await user.save();
      return user;
    } catch (err) {
      return {
        message: "Erro atualizar o usuário"
      };
    }
  }

  async destroy({ params }) {
    const { id } = params;
    const user = await User.find(id);

    await user.delete();
  }
}

module.exports = UserController;
