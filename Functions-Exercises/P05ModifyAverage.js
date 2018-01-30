function modifyAverage(number) {
    function getAverage(number) {
        number += ''
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i])
        }

        return sum / number.length;
    }

    let average = getAverage(number);

    let addNine = x => x + "9";

    while(average <= 5) {
        number = addNine(number);
        average = getAverage(number);
    }

    return number
}

