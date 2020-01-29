"use strict";

class SessionController {
  async login({ auth, request }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async logout({}) {}
}

module.exports = SessionController;
