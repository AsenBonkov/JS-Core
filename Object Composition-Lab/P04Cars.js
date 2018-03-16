function cars(input) {
    let commandExecutor = (function () {
        let store = {}
        function create(arr) {
            if (arr.length > 2){
                store[arr[0]] = Object.create(store[arr[2]])
            }else {
                store[arr[0]] = {}
            }
        }
        function set(arr) {
            let name = arr[0]
            let key = arr[1]
            store[name][key] = arr[2]
        }
        function print(arr) {
            let array = []
            let obj = store[arr[0]]
            for (let key in store[arr[0]]) {
                array.push(key + ':' + obj[key])

            }
            console.log(array.join(', '))
        }
       return {create, set, print}
    }())

    for (let str of input) {
        let args = str.split(' ')
        let command = args.shift()
        commandExecutor[command](args)
    }

}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'

])