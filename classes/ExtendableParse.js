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
            console.log(document.querySelector(`a[href="/${account}/${type}/"]`))
            return document.querySelector(`a[href="/${account}/${type}/"] div span`).innerText
        }, context._account, type))

        await page.evaluate((context, type) => {
            document.querySelector(`a[href="/${context._account}/${type}/"]`).click()
        }, context, type)

        let scrollUserList = setInterval(async () => {
            if(await page.waitForSelector('div._aano')) {
                page.evaluate(() => {
                    document.querySelector('div._aano').scrollBy(0, 1000)
                })

                score+=12
                if (score > count + 12) {
                    clearInterval(scrollUserList)
                    let names = await page.evaluate(() => {
                        const arr = Array.from(document.querySelectorAll('._aade'))
                        return arr.map(span => span.innerText)
                    }),
                    descs = await page.evaluate(() => {
                        const arr = Array.from(document.querySelectorAll('._aaeq'))
                        return arr.map(span => span.innerText)
                    });
                    
                    await page.evaluate(() => {
                        document.querySelector('._ab9y ._abl-').click()
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