function aggregateElements(arr) {
    let resultSum = 0
    let resultInverse = 0
    let resultConcat = ''
    for (let i = 0; i < arr.length; i++) {
        resultSum += arr[i]
        resultInverse += 1 / arr[i]
        resultConcat += arr[i]
    }
    console.log(resultSum)
    console.log(resultInverse)
    console.log(resultConcat)
}

aggregateElements([1, 2, 3])