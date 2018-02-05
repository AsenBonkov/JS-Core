function addAndRemove(arr) {
    let result = []
    let temp = 1
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        if (command === 'add') {
            result[i] = temp
            temp++
        }else if(command === 'remove') {
            result.pop()
            temp++
        }
    }

    if (result.length === 0){
        console.log('Empty')
    }else {
        result.forEach(element => console.log(element))
    }
}

