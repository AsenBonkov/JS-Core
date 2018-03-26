function sortArr(arr, command) {
    let ascendingComparator = (a, b) => {return a - b}
    let descendingComparator = (a, b) => {return b - a}

    let sortingObj = {
        asc: ascendingComparator,
        desc: descendingComparator
    }

    return arr.sort(sortingObj[command])
}

console.log(sortArr([1, 10, 5, 6], 'asc'));