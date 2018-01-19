function rounding(arr) {
    let number = Number(arr[0])
    let rounded = Number(arr[1])
    if (arr[1] >= 15){
        rounded = 15
    }else {
        rounded = arr[1]
    }
    let result = number.toFixed(rounded)
    console.log(Number(result))
}
rounding([10.5, 3])