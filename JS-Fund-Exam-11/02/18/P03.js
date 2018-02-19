function solve(str) {
    let rating = 0
    let ratingValue = 0
    let voteCount = 0
    let finalCount = 0



    let firstPattern = /<svg>.*<\/svg>/.exec(str)
    if (firstPattern) {

        let pattern = /<cat>\s*<text>.+\[(.+)\].*<\/text>\s*<\/cat>\s*<cat>\s*(?:<g>\s*<val>\s*((?:\d+))\s*<\/val>\s*((?:\d+))\s*<\/g>)+\s*<\/cat>/gm.exec(str)
        if (pattern) {

            let usefulText = pattern[0]
            let surveyLabel = pattern[1]

            let secondaryText = /<cat>\s*<g>\s*<val>(.+)<\/g>\s*<\/cat>/g.exec(usefulText)[1]

            let reg = /[0-9]+/g

            let arr = []

            let match = reg.exec(secondaryText)
            while (match) {
                arr.push(match[0])
                match = reg.exec(secondaryText)
            }

            for (let i = 0; i < arr.length; i += 2) {
                ratingValue = Number(arr[i])
                voteCount = Number(arr[i + 1])
                rating += ratingValue * voteCount
                finalCount += voteCount
            }
            let result = rating / finalCount
            console.log(`${surveyLabel}: ${Math.round(result * 100) / 100}`)
        }else {
            console.log("Invalid format")
        }
    } else {
        console.log('No survey found')
    }
}

solve('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>')
solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')