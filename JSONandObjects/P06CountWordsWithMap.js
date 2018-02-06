function countWords(arr) {
    let myMap = new Map()
    for (let str of arr) {
        let words = str.split(/[^a-zA-Z0-9_]+/)
            .filter(el => el.trim() !== '')
        for (let word of words) {
            word = word.toLowerCase()
            if (myMap.has(word)){
                myMap.set(word, myMap.get(word) + 1)
            } else {
                myMap.set(word, 1)
            }
        }
    }

    let sortedKeys = Array.from(myMap.keys()).sort((a,b) => a.localeCompare(b))

    for (let key of sortedKeys) {
        console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
    }
}