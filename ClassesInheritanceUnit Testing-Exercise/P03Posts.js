function solve() {

    class Post {
        constructor(title, content) {
            this.title = title
            this.content = content
        }

        toString() {
            return (`Post: ${this.title}\nContent: ${this.content}`)
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes
            this.dislikes = dislikes
            this.arrOfComments = []
        }

        addComment(comment) {
            this.arrOfComments.push(comment)
        }

        toString() {
            let str = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\nComments:\n`
            if (this.arrOfComments.length === 0) {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`
            } else {
                for (let i = 0; i < this.arrOfComments.length; i++) {
                    str += ` * ${this.arrOfComments[i]}\n`
                }
                return str.substring(0, str.length - 1)
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content)
            this.views = views
        }

        view() {
            this.views++
            return this
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}


let scm = new BlogPost("TestTitle", "TestContent", 5);


console.log(scm.toString());
