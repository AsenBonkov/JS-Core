let Person = require('./P01PersonAndTeacher')

function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human'
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendClass(Person)

let p = new Person('Ivan', 'ivan@abv.bg')
console.log(p.toSpeciesString())