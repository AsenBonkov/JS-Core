function interestRate(input){
    let princSum = input[0]
    let intRate = input[1]
    let period = input[2]
    let timeSpan = input[3]

    let compInt = princSum * Math.pow(1 + intRate / (100 * (12 / period)), 12 / period * timeSpan);
    console.log(compInt.toFixed(2))
}