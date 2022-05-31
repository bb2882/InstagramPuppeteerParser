import ExtendableParse from "./ExtendableParse.js";

class ParsePosts extends ExtendableParse {
    constructor() {
        super()
        this._account
        this.tableName = 'posts'
    }

    async parse(res, page, type, jobs, context) {

        await page.waitFor('.g47SY')
        
        let count = +(await page.evaluate(() => {
            return document.querySelector('.g47SY').innerText
        }))

        let allUrls = await page.evaluate(async (count) => {
            return await new Promise((resolve) => {
                let score = 0,
                    data = [];
                let posts_interval = setInterval(async () => {
                    score +=12

                    window.scrollBy(0, 1000)
                    Array.from(document.querySelectorAll('.v1Nh3 a')).forEach(post => {
                        data.push(post.href)
                    })

                    if (score > count + 12) {
                        console.log(data)
                        clearInterval(posts_interval)
                        resolve(data)
                    }

                }, 1500)
            })

        }, count)

        let uniqueUrls = Array.from(new Set(allUrls)),
        data = [];

        for (let i = 0; i < uniqueUrls.length; i++) {
            data.push({
                account: context._account,
                postURL: uniqueUrls[i]
            })
        }

        console.log(data)
        jobs.deleteMany({})
        jobs.insertMany(data)
        res()
    }
}

export const parsePosts = new ParsePosts()