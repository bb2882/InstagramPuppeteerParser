import puppeteer from "puppeteer";
import mongo from "mongodb";
const connection = mongo.MongoClient;
const url = "mongodb://localhost:27017"
let db, jobs

const parse = (url) => {
    (async () => {
      const browser = await puppeteer.launch({ headless: false })
      const page = await browser.newPage()
      await page.goto(url)

      /* Run javascript inside the page */
        const data = await page.evaluate(() => {
          const list = []
          const items = document.querySelectorAll("tr.job")

          for (const item of items) {
            list.push({
              company: item.querySelector(".company h3").innerHTML,
              position: item.querySelector(".company h2").innerHTML,
              link: "https://remoteok.io" + item.getAttribute("data-href"),
            })
          }

          return list
        })

      console.log(data)
      jobs.deleteMany({})
      jobs.insertMany(data)
      await browser.close()
    })()
}

export const mongoConnection = (tableName, parser, parseUrl) => {
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
          db = client.db("instagram")
          jobs = db.collection(tableName);
          parser(parseUrl);
        }
      )
}

//mongoConnection('followers', parse, "https://remoteok.io/remote-javascript-jobs");

