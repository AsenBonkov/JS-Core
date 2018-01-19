function distanceIn3D(arr) {

    let deltaX = arr[0] - arr[3]
    let deltaY = arr[1] - arr[4]
    let deltaZ = arr[2] - arr[5]

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    console.log(distance)
}