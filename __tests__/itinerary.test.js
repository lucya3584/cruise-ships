const Itinerary = require('../src/Itinerary')
const Ship = require('../src/Ship');
const Port = require('../src/Port.js')

describe('Itinerary', () => {
  it('returns object, can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object)
  });

});
