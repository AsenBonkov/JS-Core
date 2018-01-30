function upperCase(str) {
    str = str.toString().toUpperCase()
    return str.split(/\W+/).filter(e => e !== '').join(', ')
}

console.log(upperCase('Hello, how are you?'));