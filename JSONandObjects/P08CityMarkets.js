function cityMarkets(arr) {
    let cities = new Map()
    for (let str of arr) {
        let [town, item, value] = str.split(/\s*->\s*/)
        let multiply = value.split(/\s*:\s*/)
            .map(s => Number(s))
            .reduce((a,b) => a * b)
        if (cities.has(town)){
            if(cities.get(town).has(item)){
                cities.get(town).set(item, cities.get(item) + multiply)
            }else {
                cities.get(town).set(item, multiply)
            }
        }else {
            let itemsMap = new Map()

            itemsMap.set(item, multiply)
            cities.set(town, itemsMap)

        }
    }
    for (let [key, value] of cities) {
        console.log('Town - ' + key)
        for (let [item, sum] of cities.get(key)) {
            console.log('$$$' + item + ' : ' + sum)
        }
    }
}