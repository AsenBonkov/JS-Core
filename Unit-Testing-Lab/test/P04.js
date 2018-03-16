let expect = require('chai').expect

function sum(arr) {
    let sum = 0
    for (let num of arr) {
        sum += Number(num)
    }
    return sum
}

describe('Group', function () {
    it('Name', function () {
        expect(sum([1, 2])).to.be.equal(3)
    });
})
$()