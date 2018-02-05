function findVarNames(string) {
    let pattern = /\b_([A-Za-z0-9]+)\b/g

    //let result = string.match(pattern)
    let result = []
    let match = pattern.exec(string)
    while (match){
        result.push(match[1])
        match = pattern.exec(string)
    }
    //for (let i = 0; i < result.length; i++) {
    //    let temp = ''
    //    temp = result[i]
    //    temp = temp.substri//ng(1)
    //    result[i] = temp
    //}

    console.log(result.join(','))
}

findVarNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable')