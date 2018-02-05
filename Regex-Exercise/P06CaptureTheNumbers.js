function capture(arr) {
    let regex = /[0-9]+/g
    let str = arr.join(' ')
    str = str.match(regex).join(' ')
    console.log(str)
}

capture(['The300',
'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'])