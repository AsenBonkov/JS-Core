function composeTag(arr) {
    let fileLocation = arr[0]
    let altText = arr[1]

    console.log(`<img src="${fileLocation}" alt="${altText}">`)
}