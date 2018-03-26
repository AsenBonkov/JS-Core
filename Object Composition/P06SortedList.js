function solve() {
    return {
        internalArr: [],
        size: 0,
        add: function (element) {
            this.internalArr.push(element)
            this.size++
            this.sort()
        },
        remove: function (index) {
            if(index >= 0 && index < this.internalArr.length){
                this.internalArr.splice(index, 1)
                this.size--
            }
        }
        ,
        toString: function () {
            this.internalArr.join(' ')
        },
        sort: function () {
            this.internalArr = this.internalArr.sort((a,b) => a - b)
        },
        get: function (index) {
            if(index >= 0 && index < this.internalArr.length){
                return this.internalArr[index]
            }
        }
    }
}