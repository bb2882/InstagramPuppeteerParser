import mongo from "mongodb";
const connection = mongo.MongoClient;
const url = "mongodb://localhost:27017"

export default class ExtendableParse {
    get account() {
        return this._account
    }

    checkForName(arr, account) {
        arr.forEach(name => {
            if (name == this.tableName) {
                this._account = account
            }
        })
    }

    async parse(res, page, type, jobs, context) {
        let score = 0

        await page.waitFor(`a[href="/${context._account}/${type}/"]`)
        
        let count = +(await page.evaluate((account, type) => {
            return document.querySelector(`a[href="/${account}/${type}/"] div span`).innerText
        }, context._account, type))

        await page.click(`a[href="/${context._account}/${type}/"]`)

        let scrollUserList = setInterval(async () => {
            if(await page.waitFor('div.isgrP')) {
                page.evaluate(() => {
                    document.querySelector('div.isgrP').scrollBy(0, 1000)
                })

                score+=12
                if (score > count + 12) {
                    clearInterval(scrollUserList)
                    let names = await page.evaluate(() => {
                        const arr = Array.from(document.querySelectorAll('._0imsa ._7UhW9'))
                        return arr.map(span => span.innerText)
                    }),
                    descs = await page.evaluate(() => {
                        const arr = Array.from(document.querySelectorAll('.enpQJ .wFPL8'))
                        return arr.map(span => span.innerText)
                    });
                    
                    await page.evaluate(() => {
                        document.querySelector('._4EzTm  .wpO6b').click()
                    })

                    let data = []

                    for (let i = 0; i < names.length; i++) {
                        data.push({
                            account: context._account,
                            name: names[i],
                            desc: descs[i]
                        })
                    }

                    console.log(data)
                    jobs.deleteMany({})
                    jobs.insertMany(data)
                    res()
                }
            }
        }, 1500)
    }

    mongoConnection(tableName, parser, type, res, page) {
        connection.connect(
            url,
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            },
            (err, client) => {
              if (err) {
                console.error(err)
                return
              }
              let db = client.db("instagram")
              let jobs = db.collection(tableName);
              parser(res, page, type, jobs, this);
            }
          )
    }
}