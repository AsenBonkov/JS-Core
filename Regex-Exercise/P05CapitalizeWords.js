function capitalize(str) {
    let result = str.split(' ')
    for (let i = 0; i < result.length; i++) {
        result[i] = result[i][0].toUpperCase() + result[i]
            .substring(1).toLowerCase()
    }
    console.log(result.join(' '))
}