function biggestNumber(arr) {
    let a = arr[0]
    let b = arr[1]
    let c = arr[2]

    let biggestNumber = 0

    if (a > b && a > c){
        biggestNumber = a
    }else if(b > a && b > c){
        biggestNumber = b
    }else if (c > a && c > b){
        biggestNumber = c
    }else {
        biggestNumber = a
    }

    console.log(biggestNumber)
}