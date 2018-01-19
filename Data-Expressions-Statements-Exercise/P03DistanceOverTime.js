function distanceOT(data) {
    let speed1 = data[0]/3.6 * data[2]
    let speed2 = data[1]/3.6 * data[2]
    let delta = Math.abs(speed1 - speed2)
    console.log(delta)
}

distanceOT([11, 10, 120])