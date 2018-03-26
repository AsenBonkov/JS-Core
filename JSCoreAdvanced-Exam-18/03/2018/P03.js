class PaymentProcessor {
    constructor(options) {
        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        }
        if (options !== undefined) {
            if (options.hasOwnProperty('types')) {
                this.options.types = options.types
            }
            if (options.hasOwnProperty('precision')) {
                this.options.precision = options.precision
            }
        }

        this.obj = {}
    }

    registerPayment(id, name, type, value) {
        if (id.length !== 0
            && name.length !== 0
            && typeof value === 'number'
            && this.options.types.includes(type)
            && !this.obj.hasOwnProperty(id)) {
            this.obj[id] = {}
            this.obj[id].name = name
            this.obj[id].type = type
            this.obj[id].value = value
        } else {
            throw new Error()
        }
    }

    deletePayment(id) {
        if (this.obj.hasOwnProperty(id)) {
            delete this.obj[id]
        } else {
            throw new Error()
        }
    }

    get(id) {
        if (this.obj.hasOwnProperty(id)) {
            let val = this.obj[id].value
            return `Details about payment ID: ${id}\n- Name: ${this.obj[id].name}\n- Type: ${this.obj[id].type}\n- Value: ${val.toFixed(this.options.precision)}`
        } else {
            throw new Error()
        }
    }

    setOptions(options) {
        if (options.hasOwnProperty('types') && options.hasOwnProperty('precision')) {
            this.options.types = options.types
            this.options.precision = options.precision
        } else if (options.hasOwnProperty('types') && !options.hasOwnProperty('precision')) {
            this.options.types = options.types
        }else if (!options.hasOwnProperty('types') && options.hasOwnProperty('precision')) {
            this.options.precision = options.precision
        }
    }

    toString() {
        let sum = 0
        let length = 0
        for (let key in this.obj) {
            length++
            sum += Number(this.obj[key]['value'])
        }
        return `Summary:\n- Payments: ${length}\n- Balance: ${sum.toFixed(this.options.precision)}`
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());







