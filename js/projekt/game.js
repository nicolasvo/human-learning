const Board = require('./board');
const MisterX = require('./misterx.js');
const Agent = require('./agent.js');

module.exports = class Game {
  constructor() {
    this.board = new Board();
    this.tokensAvailable = [
      'X1R', 'A1R', 'A2R', 'S1R', 'S2R', 'E1R', 'E2R', 'E3R', 
      'I1R', 'I2R', 'I3R', 'X1V', 'A1V', 'A2V', 'S1V', 'S2V', 
      'E1V', 'E2V', 'E3V', 'I1V', 'I2V', 'I3V'
    ];
    this.tokens = [];
  }

  getToken({tokenName}) {
    const result = this.tokens.find(function (token) {
      if (token.name === tokenName) {
        return token;
      }
    });
    if (typeof result === 'undefined') {
      throw new Error(`Token ${tokenName} does not exist.`);
    }
    return result;
  }

  whichToken({tokenName, cell}) {
    let token;
    switch (tokenName[0]) {
      case 'X':
        token = new MisterX({cell: cell, name: tokenName});
        break;
      case 'A':
        token = new Agent({cell: cell, name: tokenName});
        break;
      default:
        throw new Error(`${tokenName} is not a permitted token name.`);
    }
    if (typeof token === 'undefined') {
      throw new Error(`${tokenName} is not a permitted token name.`);
    }
    return token;
  }

  addToken({tokenName, x, y, z}) {
    if (!this.board.cellExists({x, y, z})) {
      if (this.tokensAvailable.indexOf(tokenName) > -1) {
        this.board.addCell({x, y, z});
        const cell = this.board.getCell({x, y, z});
        this.tokens.push(this.whichToken({tokenName, cell}));
        this.tokensAvailable.splice(this.tokensAvailable.indexOf(tokenName), 1);
      } else {
        throw new Error(`Token ${tokenName} is not available.`);
      }
    } else {
      throw new Error(`Cell ${x}, ${y}, ${z} is not available.`);
    }
  }
};