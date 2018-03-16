function argInfo() {
    let summary = {}
    let sortedTypes = []
    for (let i = 0; i < arguments.length; i++) {
        let firstArg = arguments[i]
        let type = typeof firstArg
        console.log(type + ': ' + firstArg)
        if (!summary[type]){
            summary[type] = 1
        }else {
            summary[type]++
        }
    }
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]])
    }

    sortedTypes.sort((a, b) => b[1] - a[1])
    for (let [k, v] of sortedTypes) {
        console.log(`${k} = ${v}`)
    }
}

argInfo({ name: 'bob'}, 3.333, 9.999)