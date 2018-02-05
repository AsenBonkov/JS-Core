function rotateArr(arr) {
    let count = arr.pop()
    count %= arr.length
    for (let i = 0; i < count; i++) {
        arr.unshift(arr[arr.length - 1])
        arr.pop()
    }
    console.log(arr.join(' '))
}
