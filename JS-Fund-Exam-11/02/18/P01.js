function solve(strArr) {
    let bitcoinPrice = 11949.16
    let goldPrice = 67.51
    let sumMoneyFromGold = 0
    let firstBitcoinBought = 0
    let bitcoinBought = 0
    let tempBool = false
    for (let i = 0; i < strArr.length; i++) {
        if (i !== 0 && (i + 1) % 3 === 0){
            sumMoneyFromGold += Number(strArr[i]) * goldPrice * 0.7
        }else {
            sumMoneyFromGold += Number(strArr[i] * goldPrice)
        }

        if (sumMoneyFromGold > bitcoinPrice && tempBool === false){
            firstBitcoinBought = i + 1
            tempBool = true
        }
    }

    if (sumMoneyFromGold < bitcoinPrice){
        console.log('Bought bitcoins: 0')
        console.log(`Left money: ${sumMoneyFromGold.toFixed(2)} lv.`)
    }else {
        bitcoinBought = Math.floor(sumMoneyFromGold / bitcoinPrice)
        let moneyLeft = sumMoneyFromGold - (bitcoinBought * bitcoinPrice)
        console.log(`Bought bitcoins: ${Math.floor(sumMoneyFromGold / bitcoinPrice)}`)
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBought}`)
        console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)
    }
}

solve([
    '3124.15',
    '504.212',
    '2511.124'
])