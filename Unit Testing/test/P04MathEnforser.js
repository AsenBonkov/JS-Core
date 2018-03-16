let expect = require('chai').expect

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
}

describe('Math Enforcer', function () {
    it('should return 10', function () {
        expect(mathEnforcer['addFive'](5)).to.be.equal(10)
    });
    it('should return 10.15', function () {
        expect(mathEnforcer['addFive'](5.15)).to.be.equal(10.15)
    });
    it('should return -5', function () {
        expect(mathEnforcer['addFive'](-10)).to.be.equal(-5)
    });
    it('should return undefined', function () {
        expect(mathEnforcer['addFive']('5')).to.be.equal(undefined)
    });
    it('should return 5', function () {
        expect(mathEnforcer['addFive'](0)).to.be.equal(5)
    });
    it('should return -10', function () {
        expect(mathEnforcer['subtractTen'](0)).to.be.equal(-10)
    });
    it('should return -10', function () {
        expect(mathEnforcer['subtractTen'](5.25)).to.be.equal(-4.75)
    });
    it('should return -30', function () {
        expect(mathEnforcer['subtractTen'](-20)).to.be.equal(-30)
    });
    it('should return 0', function () {
        expect(mathEnforcer['subtractTen'](10)).to.be.equal(0)
    });
    it('should return undefined', function () {
        expect(mathEnforcer['subtractTen']('1')).to.be.equal(undefined)
    });
    it('should return 15', function () {
        expect(mathEnforcer['sum'](5, 10)).to.be.equal(15)
    });
    it('should return 0', function () {
        expect(mathEnforcer['sum'](0, 0)).to.be.equal(0)
    });
    it('should return undefined', function () {
        expect(mathEnforcer['sum'](5, '10')).to.be.equal(undefined)
    });
    it('should return undefined', function () {
        expect(mathEnforcer['sum']('5', 10)).to.be.equal(undefined)
    });
    it('should return undefined', function () {
        expect(mathEnforcer['sum']('5', '10')).to.be.equal(undefined)
    });
    it('should return -2', function () {
        expect(mathEnforcer['sum'](-2, 0)).to.be.equal(-2)
    });
    it('should return -7', function () {
        expect(mathEnforcer['sum'](-2, -5)).to.be.equal(-7)
    });
    it('should return 8', function () {
        expect(mathEnforcer['sum'](2.5, 5.5)).to.be.equal(8)
    });
})
