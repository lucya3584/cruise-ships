const Port = require('../src/Port.js');



const Itinerary = require('../src/itinerary.js')


describe('Port', () => {
  it('returns an object', () => {
    expect(new Port()).toBeInstanceOf(Object)
  });
  it('has a name propery', () => {
    const port = new Port('Dover')
    expect(port.name).toBe('Dover')
  });

});

let docking = new Port();