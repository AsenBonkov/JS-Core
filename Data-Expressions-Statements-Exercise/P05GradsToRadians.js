function gradToDegrees(grad) {
    grad = grad % 400
    let degree = grad * 0.9
    if (degree < 0){
        return 360 + degree
    }else {
        return degree
    }
}