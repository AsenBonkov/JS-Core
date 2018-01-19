function imperialUnits(number) {
    let foot = Math.floor(number / 12)
    let inches = (number % 12).toFixed(0)

    console.log(`${foot}'-${inches}"`)
}