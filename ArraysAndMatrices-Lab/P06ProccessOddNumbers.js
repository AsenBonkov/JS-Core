function oddNumbersProcess(arr) {
    arr = arr.filter((x, i) => i % 2 === 1).map(el => el * 2).reverse()
    console.log(arr.join(' '))
}

oddNumbersProcess([10, 15, 20, 25])