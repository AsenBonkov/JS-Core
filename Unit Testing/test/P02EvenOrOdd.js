let expect = require('chai').expect

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Check string odd or even length', function () {
    it('should return even', function () {
        expect(isOddOrEven('aabbcc')).to.be.equal('even')
    });
    it('should return odd', function () {
        expect(isOddOrEven('aabbcca')).to.be.equal('odd')
    });
    it('should return odd', function () {
        expect(isOddOrEven(2)).to.be.equal(undefined)
    });
})