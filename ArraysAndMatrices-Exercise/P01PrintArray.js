function printArr(arr) {
    let result = ''
    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] + arr[arr.length - 1]
    }
    result = result.substring(0, result.length - 1)
    console.log(result)
}