const Token = require('./token');

module.exports = class Agent extends Token {
  constructor({cell, name}) {
    super({cell});
    this._name = name;
  }

  get name() {
    return this._name;
  }
};