function monkeyPatcher(command) {
    let self = this
    let commands = {
        upvote: () => {
            this.upvotes++
        },
        downvote: () => {
            this.downvotes++
        },
        score: () => {
            let currentUpVotes = this.upvotes
            let currentDownVotes = this.downvotes
            let totalVotes = currentDownVotes + currentUpVotes
            let totalScore = currentUpVotes - currentDownVotes

            let rating = 'new'
            let isNewPost = totalVotes < 10
            if (!isNewPost) {
                updateRating()
            }

            if (totalVotes > 50) {
                obfuscateVotes()
            }


            return [currentUpVotes, currentDownVotes, totalScore, rating]

            function updateRating() {
                if (currentUpVotes > totalVotes * 0.66) {
                    rating = 'hot'
                } else if ((currentUpVotes > 100 || currentDownVotes > 100) && currentUpVotes >= currentDownVotes) {
                    rating = 'controversial'
                } else if (totalScore < 0) {
                    rating = 'unpopular'
                }
            }

            function obfuscateVotes() {
                let greater = Math.max(currentUpVotes, currentDownVotes)
                let inflation = Math.ceil(greater * 0.25)
                currentDownVotes += inflation
                currentUpVotes += inflation
            }
        }
    }
    return commands[command]()
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkeyPatcher.call(post, 'upvote');
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score)
for (let i = 0; i < 50; i++) {
    monkeyPatcher.call(post, 'downvote');
}
score = monkeyPatcher.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score)