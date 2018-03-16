function carFactory(obj) {
    let result = {}
    let smallEngine = { power: 90, volume: 1800}
    let normalEngine = { power: 120, volume: 2400}
    let monsterEngine = { power: 200, volume: 3500}

    result.model = obj.model
    let bool = false

    if (obj.power <= smallEngine.power && bool === false){
        result.engine = smallEngine
        bool = true
    }else if(obj.power <= normalEngine.power && bool === false){
        result.engine = normalEngine
        bool = true
    }else  if (obj.power <= monsterEngine.power && bool === false){
        result.engine = monsterEngine
        bool = true
    }

    result.carriage = {
        type: obj.carriage,
        color: obj.color
    }
    let wheelsize = obj.wheelsize
    if (wheelsize % 2 === 0){
        wheelsize -= 1
    }

    result.wheels = [wheelsize, wheelsize, wheelsize, wheelsize]
    return result
}

console.log(carFactory({
        model: 'Ferrari',
        power: 200,
        color: 'red',
        carriage: 'coupe',
        wheelsize: 21
    }));