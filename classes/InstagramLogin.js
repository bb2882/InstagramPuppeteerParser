import puppeteer from 'puppeteer'
import ps from 'prompt-sync';
export const prompt = ps()

class InstagramLogin {
	constructor(template) {
		this._username = template.username
		this._password = template.password
		this._account
	}

	set account(account) {
		this._account = account
	}

    openFollowersPage(page) {
		if (this._account) {
			(async () => {
				await page.waitFor('div[class="eyXLr"]')
				await page.click('div[class="eyXLr"]')
				await page.type('input[aria-label="Search Input"]', this._account)
				await page.waitFor(`a[href="/${this._account}/"]`)
				await page.click(`a[href="/${this._account}/"]`)
			})();
		}
    }

	login(objArr) {
		(async () => {
			const browser = await puppeteer.launch({headless: false});
			const page = await browser.newPage();
			const pages = await browser.pages();
			if (pages.length > 1) await pages[0].close();
			await page.setViewport({ width: 0, height: 0 });
			await page.goto('https://www.instagram.com/accounts/login/');
			await page.waitFor('input[name="username"]');
			await page.focus('input[name="username"]');
			await page.keyboard.type(this._username);
			await page.focus('input[name="password"]');
			await page.keyboard.type(this._password);
			await page.click('button[type="submit"]');
			this.openFollowersPage(page)
			await page.waitForSelector('.zw3Ow')

			if (objArr) {

				objArr.reduce((promiseChain, item) => {
					return promiseChain.then(() => new Promise((resolve) => {
					  item.mongoConnection(item.tableName, item.parse, item.tableName, resolve, page);
					}));
				}, Promise.resolve());

			} 
		})();
	}
}

export const template = {
	username: prompt("Please, enter your instagram username: "),
	password: prompt("Please, enter your instagram password: "),
}

export const myPage = new InstagramLogin(template)