function printNth(arr) {
    let nth = Number(arr.pop())

    for (let i = 0; i < arr.length; i += nth) {
        if (nth > arr.length - 1){
            console.log(arr[0])
        }else {
            console.log(arr[i])
        }
    }

}