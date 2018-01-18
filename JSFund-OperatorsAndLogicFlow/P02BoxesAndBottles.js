function boxesAndBottles(boxes, bottles) {
    if (bottles % boxes === 0) {
        return Math.round(boxes / bottles)
    } else {
        return Math.ceil(boxes / bottles)
    }
}