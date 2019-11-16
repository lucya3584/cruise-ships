function Ship(itinerary) {

  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null
}
Ship.prototype = {

  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  },
  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];

  }

}

module.exports = Ship