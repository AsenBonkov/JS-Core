function extract(str) {
    let pattern = /www\.([A-Za-z0-9-]+)(\.[a-z]+)+/g
    let result = []

    for (let sentence of str) {
        let match = pattern.exec(sentence)
        while (match) {
            result.push(match[0])
            match = pattern.exec(sentence)
        }
    }
    console.log(result.join('\n'))
}

extract('Join WebStars now for free, at www.web-stars.com\n' +
    'You can also support our partners:\n' +
    'Internet - www.internet.com\n' +
    'WebSpiders - www.webspiders101.com\n' +
    'Sentinel - www.sentinel.-ko \n')