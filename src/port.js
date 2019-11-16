function Port(name) {
  this.name = name
  this.ships = []
}

Port.prototype = {

  addShip(ship) {
    this.ships.push(ship);
  },
  removeShip(ship) {
    this.ships = this.ships.filter(leavingShip => leavingShip !== ship)
  },


};



module.exports = Port