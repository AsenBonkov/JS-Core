function solve(obj) {
    if (obj.handsShaking === true) {
        let alcoholNeeded = 0.1 * obj.weight * obj.experience
        obj.bloodAlcoholLevel += alcoholNeeded
        obj.handsShaking = false
    }
    return obj
}