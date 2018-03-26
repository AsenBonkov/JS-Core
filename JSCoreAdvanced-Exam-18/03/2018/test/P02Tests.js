let expect = require('chai').expect
let paymentPackage = require('../P02')

describe('Payment Package tests', function () {
        let payment
        beforeEach(function () {
            payment = new paymentPackage('Pesho', 10)
        })
        it('should throw Error', function () {
            expect(payment.name).to.be.equal('Pesho')
        });
        it('should throw Error', function () {
            expect(() => {
                payment.name = {}
            }).to.throw(Error)
        });
        it('should throw Error', function () {
            expect(() => {
                payment.value = 'string'
            }).to.throw(Error)
        });
        it('should throw Error', function () {
            expect(() => {
                payment.VAT = []
            }).to.throw(Error)
        });
        it('should throw Error', function () {
            expect(() => {
                payment.active = 5
            }).to.throw(Error)
        });


        it('should throw Error', function () {
            expect(payment.name).to.be.equal('Pesho')
        });
        it('should throw Error', function () {
            expect(() => {
                payment.VAT = []
            }).to.throw(Error)
        });
        it('should throw Error', function () {
            expect(() => {
                payment.active = 5
            }).to.throw(Error)
        });

        it('should return the name', function () {
            expect(payment.name).to.be.equal('Pesho')
        });
        it('should return the name', function () {
            expect(payment.value).to.be.equal(10)
        });
        it('should return the name', function () {
            expect(payment.VAT).to.be.equal(20)
        });
        it('should return the name', function () {
            expect(payment.active).to.be.equal(true)
        });


        it('should return the name', function () {
            expect(payment.name = 'Gosho').to.be.equal('Gosho')
        });
        it('should return the value', function () {
            expect(payment.value = 5).to.be.equal(5)

        });
        it('should return the VAT', function () {
            expect(payment.VAT = 30).to.be.equal(30)
        });
        it('should return the name', function () {
            expect(payment.active = false).to.be.equal(false)
        });


        it('should  ', function () {
            expect(payment.toString()).to.be.equal('Package: Pesho\n' +
                '- Value (excl. VAT): 10\n' +
                '- Value (VAT 20%): 12')
        });

        it('checks if', function () {
            expect(payment.hasOwnProperty('toString')).to.be.false
            expect(payment.hasOwnProperty('name')).to.be.false
            expect(payment.hasOwnProperty('active')).to.be.false
            expect(payment.hasOwnProperty('VAT')).to.be.false
            expect(payment.hasOwnProperty('_value')).to.be.true
        });
    }
)