const Port = require('../src/Port');


describe('Port', () => {
    it('returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object)
    });
    it('has a name propery', () => {
        const port = new Port('Calais')
        expect(port.arrivalPort).toBe('Calais')
    });



});


let docking = new Port();