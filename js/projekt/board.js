const Cell = require('./cell.js');

module.exports = class Board {
  constructor() {
    this.cells = [];
  }

  addCell({x, y, z}) {
    this.cells.push(new Cell({x, y, z}, this.cells));
  }

  getCell({x, y, z}) {
    const result = this.cells.find(function (cell) {
      if (JSON.stringify(cell.getCoordinates()) === JSON.stringify({x, y, z})) {
        return cell;
      }
    });
    if (typeof result === 'undefined') {
      throw new Error(`Cell with coordinates {${x}, ${y}, ${z}} does not exist.`);
    }
    return result;
  }

  cellExists({x, y, z}) {
    const result = this.cells.find(function (cell) {
      if (JSON.stringify(cell.getCoordinates()) === JSON.stringify({x, y, z})) {
        return cell;
      }
    });
    return (typeof result !== 'undefined');
  }
};