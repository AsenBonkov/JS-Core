function tickets(arrayOfStrings, sortingCriteria) {
    let arr = []
    for (let element of arrayOfStrings) {
        let splitted = element.split('|')
        let destinationName = splitted[0]
        let price = Number(splitted[1])
        let status = splitted[2]

        class Ticket {
            constructor(destinationName, price, status) {
                this.destination = destinationName
                this.price = price
                this.status = status
            }
        }

        let ticket = new Ticket(destinationName, price, status)
        arr.push(ticket)
        switch (sortingCriteria) {
            case 'destination':
                arr.sort((a, b) => a.destination.localeCompare(b.destination));
                break
            case 'price':
                arr.sort((a, b) => a.price - b.price);
                break
            case 'status':
                arr.sort((a, b) => a.status.localeCompare(b.status));
                break
        }
    }
    return arr
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));