const should = require('chai').should();
const Board = require('../board.js');
const Cell = require('../cell.js');

describe('Board', function () {
  const board = new Board();
  board.addCell({x: 0, y: 0, z: 0});
  it('should have a cells property', function () {
    board.should.have.property('cells');
  });
  describe('addCell', function () {
    it('should exist', function () {
      board.addCell.should.be.a('function');
    });
    it('should add a cell object to cells', function () {
      board.cells.should.have.lengthOf(1);
    });
  });
  describe('getCell', function () {
    it('should exist', function () {
      board.getCell.should.be.a('function');
    });
    it('should get a cell', function () {
      const cell = board.getCell({x: 0, y: 0, z: 0})
    });
    it('should throw an error if a cell does not exist', function () {
      (() => board.getCell({x: 1, y: -1, z: 0}).should.throw(Error));
    });
  });
  describe('cellExists', function () {
    it('should exist', function () {
      board.cellExists.should.be.a('function');
    });
    it('should return false if a cell does not exist', function () {
      board.cellExists({x: 0, y: 4, z: -4}).should.equal(false);
    });
    it('should return true if a cell exists', function () {
      board.cellExists({x: 0, y: 0, z: 0}).should.equal(true);
    });
  });
  describe('cells', function () {
    it('should be an array', function () {
      board.cells.should.be.a('array');
    });
    it('should be an array of cell objects', function () {
      board.cells[0].should.be.an.instanceOf(Cell);
    });
  });
});

describe('Cell', function () {
  const board = new Board();
  board.addCell({x: 0, y: 0, z: 0});
  // const cell = new Cell({x: 0, y: 0, z: 0}, board.cells);
  const cell = board.getCell({x: 0, y: 0, z: 0});
  it('should throw an error if no parameters are passed', function () {
    (() => new Cell()).should.throw(TypeError);
  });
  it('should throw an error if parameters are missing', function () {
    (() => new Cell({x: 0})).should.throw(Error);
  });
  it('should have x, y and z properties', function () {
    cell.should.have.property('x');
    cell.should.have.property('y');
    cell.should.have.property('z');
  });
  describe('getCoordinates', function () {
    it('should exist', function () {
      cell.getCoordinates.should.be.a('function');
    });
    it('should return the coordinates of the current cell', function () {
      const coordinates = cell.getCoordinates();
      coordinates.should.deep.equal({x: 0, y: 0, z: 0});
    });
  });
  describe('getNeighbourCoordinates', function () {
    it('should exist', function () {
      cell.getNeighbourCoordinates.should.be.a('function');
    });
    it('should return the coordinates of the neighbour cell given the edge', function () {
      cell.getNeighbourCoordinates({edge: 1}).should.deep.equal({x: 0, y: 1, z: -1});
      cell.getNeighbourCoordinates({edge: 2}).should.deep.equal({x: 1, y: 0, z: -1});
      cell.getNeighbourCoordinates({edge: 3}).should.deep.equal({x: 1, y: -1, z: 0});
      cell.getNeighbourCoordinates({edge: 4}).should.deep.equal({x: 0, y: -1, z: 1});
      cell.getNeighbourCoordinates({edge: 5}).should.deep.equal({x: -1, y: 0, z: 1});
      cell.getNeighbourCoordinates({edge: 6}).should.deep.equal({x: -1, y: 1, z: 0});
    });
  });
  describe('getNeighbour', function () {
    it('should exist', function () {
      cell.getNeighbour.should.be.a('function');
    });
    it('should return the neighbour given the edge of the cell', function () {
      board.addCell({x: 0, y: 1, z: -1});
      const neighbour = cell.getNeighbour({edge: 1});
      neighbour.should.be.an.instanceOf(Cell);
    });
  });
  describe('getNeighbours', function () {
    it('should exist', function () {
      cell.getNeighbours.should.be.a('function');
    });
    it('should return an object containing the edges with an existing cell', function () {
      cell.getNeighbours()[1].should.be.an.instanceOf(Cell);
      cell.getNeighbours()[1].getCoordinates().should.deep.equal({x: 0, y: 1, z: -1});
    });
    it('should not contain a side with a cell that does not exist', function () {
      should.not.exist(cell.getNeighbours()[2]);
    });
    it('should return undefined if cell does not have any neighbour', function () {
      board.addCell({x: 20, y: 20, z: 20});
      should.not.exist(board.getCell({x: 20, y: 20, z: 20}).getNeighbours());
    });
  });
});