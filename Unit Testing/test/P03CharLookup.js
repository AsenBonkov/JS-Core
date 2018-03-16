let expect = require('chai').expect

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}


describe('Retrieves char at index', function () {
    it('should return b', function () {
        expect(lookupChar('alabala', 3)).to.be.equal('b')
    });
    it('should return Incorrect index', function () {
        expect(lookupChar('alabala', 7)).to.be.equal('Incorrect index')
    });
    it('should return Incorrect index', function () {
        expect(lookupChar('alabala', -1)).to.be.equal('Incorrect index')
    });
    it('should return undefined', function () {
        expect(lookupChar('alabala', 'b')).to.be.equal(undefined)
    });
    it('should return undefined', function () {
        expect(lookupChar(231, 1)).to.be.equal(undefined)
    });
    it('should return undefined', function () {
        expect(lookupChar('alabala', 3.12)).to.be.equal(undefined)
    });
})