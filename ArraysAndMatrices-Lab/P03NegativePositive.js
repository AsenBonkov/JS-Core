function negativePositive(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0){
            arr2.unshift(arr[i])
        }else {
            arr2.push(arr[i])
        }
    }
    return arr2.join('\n')
}