function sum(a, b) {
    return a + b
}

let expect = require('chai').expect

describe('test', function () {
    it('should return 3', function () {
        expect(sum(1, 2)).to.be.equal(3)
    })
})