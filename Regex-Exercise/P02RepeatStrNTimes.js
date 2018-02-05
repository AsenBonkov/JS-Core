function repeatStr(str, num) {
    let str2 = ''
    for (let i = 0; i < num; i++) {
        str2 += str
    }
    console.log(str2)
}

repeatStr('repeat', 5)