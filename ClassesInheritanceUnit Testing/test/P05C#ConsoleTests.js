let expect = require('chai').expect
const Console = require('../P05C#Console')

describe('Console tests', function () {
    it('should return string', function () {
        expect(Console.writeLine('test')).to.be.equal('test')
    });
    it('should return object JSON', function () {
        expect(Console.writeLine({name: 'Pesho'})).to.be.equal(JSON.stringify({name: 'Pesho'}))
    });
    it('should return string', function () {
        expect(Console.writeLine('{0}, {1}, {2}', 1, 2, 3)).to.be.equal('1, 2, 3')
    });
    it('should return TypeError', function () {
        expect(() => Console.writeLine([], 1, 2)).to.throw(TypeError)
    });
    it('should return TypeError', function () {
        expect(() => Console.writeLine('{0}', 1, 2)).to.throw(RangeError)
    });
    it('should return RangeError', function () {
        expect(() => Console.writeLine('{10}', 1, 2, 4)).to.throw(RangeError)
    });
})
