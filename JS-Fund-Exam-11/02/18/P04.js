function solve(str) {
    let rating = 0
    let ratingValue = 0
    let voteCount = 0
    let finalCount = 0


    let firstPattern = /<svg>.*<\/svg>/.exec(str)
    if (firstPattern) {

        let pattern = /<cat>\s*<text>.+\[(.+)\]<\/text>\s*<\/cat>\s*<cat>(?:<g>\s*<val>((?:\d+))<\/val>((?:\d+))<\/g>)+<\/cat>/gm.exec(str)
        if (pattern) {
            let usefulText = pattern[0]
            let surveyLabel = pattern[1]

            let secondaryText = /<cat>\s*<g>\s*<val>(.+)<\/g>\s*<\/cat>/g.exec(usefulText)[0]

            let reg = /<g>\s*<val>([1-9]+)<\/val>([0-9]+)<\/g>/g

            let arr = []
            let match = reg.exec(secondaryText)
            while(match){
                arr.push(match[1])
                arr.push(match[2])
                match = reg.exec(secondaryText)
            }
            arr = arr.map(el => Number(el))
            for (let i = 0; i < arr.length; i++) {
                if (typeof arr[i] === 'number'){
                    for (let i = 0; i < arr.length; i += 2) {
                        ratingValue = Number(arr[i])
                        voteCount = Number(arr[i + 1])
                        rating += ratingValue * voteCount
                        finalCount += voteCount
                    }
                }else {
                    console.log('Invalid format')
                }
            }

            let results = rating / finalCount
            let result = results.toFixed(2)
            console.log(`${surveyLabel}: ${(result * 100) / 100}`)
        } else {
            console.log("Invalid format")
        }
    } else {
        console.log('No survey found')
    }
}

