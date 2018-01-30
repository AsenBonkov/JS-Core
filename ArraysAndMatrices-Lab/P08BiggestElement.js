function biggestElement(matrix) {
    console.log(
        matrix.map(arr => arr.sort((a, b) => a<b)[0])
            .sort((a, b) => a<b)[0]
    )
}
biggestElement([1, 2, 3, 10], [1, 2, 3, 60])