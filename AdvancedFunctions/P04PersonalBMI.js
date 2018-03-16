function personalBMI(name, age, weight, height) {
    let personInfo = {
        age: age,
        weight: weight,
        height: height
    }
    let bmi = Math.round(weight / ((height / 100) * (height / 100)))

    if (bmi < 30) {
        return {
            name: name,
            personalInfo: personInfo,
            BMI: bmi,
            status: statusBMI(bmi)
        }
    }else {
        return {
            name: name,
            personalInfo: personInfo,
            BMI: bmi,
            status: statusBMI(bmi),
            recommendation: 'admission required'
        }
    }

    function statusBMI(number) {
        if (number < 18.5) {
            return 'underweight'
        } else if (number >= 18.5 && number < 25) {
            return 'normal'
        } else if (number >= 25 && number < 30) {
            return 'overweight'
        } else if (number >= 30) {
            return 'obese'
        }
    }

}

console.log(personalBMI('Honey Boo Boo', 9, 57, 137));