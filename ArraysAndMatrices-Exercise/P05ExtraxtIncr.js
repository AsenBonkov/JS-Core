function extractIncreasingElements(arr) {
    arr = arr.map(Number)
    let arr2 = [arr[0]]
    let k = 1
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr2[i - k]) {
            arr2.push(arr[i])
        }else {
            k++
        }
    }
    arr2.forEach(el => console.log(el))
}

extractIncreasingElements([1, 3, 8, 4, 10, 12, 3, 2, 24])