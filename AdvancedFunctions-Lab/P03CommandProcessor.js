function solve(arr) {
    let closure = (function () {
        let str = ''
        for (let command of arr) {
            let token = command.split(' ')
            if (token[0] === 'append') {
                str += token[1]
            }
            if (token[0] === 'removeStart') {
                str = str.slice(Number(token[1]))
            }
            if (token[0] === 'removeEnd') {
                str = str.slice(0, str.length - Number(token[1]))
            }
            if (token[0] === 'print') {
                return console.log(str)
            }
        }

    })()
}