function findOccs(str, word) {
    //word = '\b' + word + '\b'
    let pattern = RegExp("\\b"+word+"\\b", "gi")

    let counter = 0
    let arr = []
    arr = str.match(pattern)
    if (arr === null){
        console.log(0)
    } else if(arr.length > 0) {
        counter = arr.length
        console.log(counter)
    }
}

findOccs('the the the', 'asd')