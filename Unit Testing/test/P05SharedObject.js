let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;


let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe('Shared Object Unit Tests',function () {
    describe('Initial Value tests', function () {
        it('test name initial value', function () {
            expect(sharedObject.name).to.be.null
        });
        it('test income initial value', function () {
            expect(sharedObject.income).to.be.null
        });
    })

    describe('Change name tests', function () {
        it('with empty string (name === null)', function () {
            sharedObject.changeName('')
            expect(sharedObject.name).to.be.null
        });
        it('with non-empty string (name !== null)', function () {
            sharedObject.changeName('Pesho')
            expect(sharedObject.name).to.be.equal('Pesho')
        });
    })
    
    describe('Name input tests', function () {
        it('with empty string (name === null)', function () {
            sharedObject.changeName('Nakov')
            sharedObject.changeName('')
            let nameTxtVal = $('#name').val()
            expect(nameTxtVal).to.be.equal('Nakov')
        });
        it('with non-empty string (name !== null)', function () {
            sharedObject.changeName('Pesho')
            let nameTxtVal = $('#name').val()
            expect(nameTxtVal).to.be.equal('Pesho')
        });
    })

    describe('Change income tests', function () {
        it('with string should stay null', function () {
            sharedObject.changeIncome('d')
            expect(sharedObject.income).to.be.null
        });
        it('with a positive number (should change correctly)', function () {
            sharedObject.changeIncome(5)
            expect(sharedObject.income).to.be.equal(5)
        });
        it('with a floating point', function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(4.5)
            expect(sharedObject.income).to.be.equal(5)
        });
        it('with a negative number', function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(-4)
            expect(sharedObject.income).to.be.equal(5)
        });
        it('with a zero', function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(0)
            expect(sharedObject.income).to.be.equal(5)
        });

        describe('income input tests', function () {
            it('with a string(should not change correctly)', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome('d')
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5')
            });
            it('with a positive number', function () {
                sharedObject.changeIncome(5)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5')
            });
            it('with a floating-point', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome(2.1)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5')
            });
            it('with a floating-point', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome(-5)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5')
            });
            it('with a floating-point', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome(0)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5')
            });
        })
    })
    describe('Update name tests', function () {
        it('with an empty string', function () {
            sharedObject.changeName('Viktor')
            let nameEl = $('#name')
            nameEl.val('')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Viktor')
        });
        it('with a non-empty string', function () {
            sharedObject.changeName('Viktor')
            let nameEl = $('#name')
            nameEl.val('Kiril')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Kiril')
        });
    })

    describe('Update income tests', function () {
        it('with a string', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('income')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3)
        });
        it('with a floating-point', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('3.11')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3)
        });
        it('with a negative numbers', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('-5')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3)
        });
        it('with a zero', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('0')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3)
        });
        it('with a positive number', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('5')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(5)
        });
    })

});
