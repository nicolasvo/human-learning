const coordinates = require('./coordinates.js').coordinates;

module.exports = class Cell {
  constructor(coordinates, cells) {
    ['x', 'y', 'z'].forEach(function (coordinate) {
      if (!coordinates.hasOwnProperty(coordinate)) {
        throw new Error(`Missing coordinate ${coordinate}`);
      }
    });
    this.x = coordinates.x;
    this.y = coordinates.y;
    this.z = coordinates.z;
    this.getCells = () => { return cells; }
  }

  getCoordinates() {
    return {x: this.x, y: this.y, z: this.z};
  }

  getNeighbourCoordinates({edge}) {
    return {
      x: this.x + coordinates[edge].x,
      y: this.y + coordinates[edge].y,
      z: this.z + coordinates[edge].z
    };
  }

  getNeighbour({edge}) {
    const neighbourCoordinates = this.getNeighbourCoordinates({edge});
    const neighbour = this.getCells().find(function (cell) {
      if (JSON.stringify(cell.getCoordinates()) === JSON.stringify(neighbourCoordinates)) {
        return cell;
      }
    });
    return neighbour;
  }

  getNeighbours() {
    // l o l
    const edges = Array.from({length: 6}, (v, k) => k + 1);
    const neighbours = {};

    for (const edge of edges) {
      const neighbour = this.getNeighbour({edge});
      if (typeof neighbour !== 'undefined') {
        neighbours[edge] = neighbour;
      }
    }
    return (Object.keys(neighbours).length ? neighbours : undefined);
  }
};