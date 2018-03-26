function solution(arr) {
    let commandExecutor = (function () {
        let array = []
        function add(str) {
            array.push(str)
        }
        function remove(str) {
            array = array.filter(w => w !== str)
        }
        function print() {
            console.log(array.join(','))
        }
        return { add, remove, print }
    }())
    for (let str of arr) {
        let [command, value] = str.split(' ')
        commandExecutor[command](value)
    }
}
solution(['add hello', 'add again', 'remove hello', 'add again', 'print'])