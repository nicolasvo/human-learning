const Board = require('../board.js');
const Cell = require('../cell.js');
const Token = require('../token.js');
const MisterX = require('../misterx.js');

const board = new Board();
board.addCell({x: 0, y: 0, z: 0});

describe('Token', function () {
  const token = new Token({cell: board.cells[0]});

  it('should have a cell property of type cell', function () {
    token.should.have.property('cell');
    token.cell.should.be.an.instanceOf(Cell);
  });
});

describe('MisterX', function () {
  const misterX = new MisterX({cell: board.cells[0]});

  it('should have a cell property of type cell', function () {
    misterX.should.have.property('cell');
    misterX.cell.should.be.an.instanceOf(Cell);
  });
});