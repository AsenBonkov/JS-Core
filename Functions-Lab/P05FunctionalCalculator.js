function calculator(a, b, symbol) {
    let add = function (c, d) {
        return c + d
    }
    let subtract = function (c, d) {
        return c - d
    }
    let multiply = function (c, d) {
        return c * d
    }
    let divide = function (c, d) {
        return c / d
    }

    switch (symbol) {
        case '*': return multiply(a, b)
        case '/': return divide(a, b)
        case '+': return add(a, b)
        case '-': return subtract(a, b)
    }
}