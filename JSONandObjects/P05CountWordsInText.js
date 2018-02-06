function countWords(arr) {
    let result = {}
    for (let str of arr) {
        let currentWords = str.split(/[^0-9A-Za-z_]+/).filter(el => el !== '')
        for (let word of currentWords) {
            if (result.hasOwnProperty(word)){
                result[word] += 1
            }else {
                result[word] = 1
            }
        }
    }
    console.log(JSON.stringify(result))
}