class Ship {
constructor(currentPort, ship) {
    this.currentPort = currentPort
    this.ship = ship  
}
setSail() {
    this.currentPort = this.ship  
    }

dock(port) {
    this.currentPort = port
}
    
}

module.exports = Ship