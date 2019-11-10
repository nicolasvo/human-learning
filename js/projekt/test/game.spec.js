const should = require('chai').should();
const Board = require('../board.js');
const Token = require('../token.js');
const Game = require('../game.js');
const MisterX = require('../misterx.js');
const Agent = require('../agent.js');

describe('Game', function () {
  const game = new Game();
  it('should have a board property of type board', function () {
    game.should.have.property('board');
    game.board.should.be.an.instanceOf(Board);
  });
  it('should have a tokensAvailable property of type array', function () {
    game.should.have.property('tokensAvailable');
    game.tokensAvailable.should.be.a('array');
  });
  it('should have a tokensCurrent property of type array', function () {
    game.should.have.property('tokensAvailable');
    game.tokensAvailable.should.be.a('array');
  });
  describe('addToken', function () {
    game.addToken({tokenName: 'X1R', x: 0, y: 0, z: 0});

    it('should exist', function () {
      game.addToken.should.be.a('function');
    });
    // Excellent
    it('should add a token to tokens', function () {
      game.tokens[0].should.be.an.instanceOf(Token);
      game.tokens[0].should.be.an.instanceOf(MisterX);
    });
    it('should throw an error if cell is not available', function () {
      (() => game.addToken({tokenName: 'A1R', x: 0, y: 0, z: 0})).should.throw('Cell 0, 0, 0 is not available.');
    });
    it('should throw an error if token is not in tokensAvailable', function () {
      (() => game.addToken({tokenName: 'X1R', x: 1, y: -1, z: 0})).should.throw('Token X1R is not available.');
    });
  });
  describe('whichToken', function () {
    it('should exist', function () {
      game.whichToken.should.be.a('function');
    });
    it('should return a class given a token name', function () {
      game.whichToken({cell: game.board.cells[0], tokenName : 'X1R'}).should.be.an.instanceOf(MisterX);
    });
    it('should throw an error if an unallowed token name is given', function () {
      (() => game.whichToken({cell: game.board.cells[0], tokenName: 'speck'})).should.throw('speck is not a permitted token name.');
    });
  });
  describe('getToken', function () {
    it('should return a token given a token name', function () {
      game.getToken({tokenName: 'X1R'}).should.be.an.instanceOf(MisterX);
      game.getToken({tokenName: 'X1R'}).name.should.equal('X1R');
    });
  });
});