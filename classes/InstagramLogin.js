import puppeteer from 'puppeteer'
import ps from 'prompt-sync';
export const prompt = ps()

class InstagramLogin {
	constructor(template) {
		this._username = template.username
		this._password = template.password
	}

	login() {
		(async () => {
			const browser = await puppeteer.launch({headless: false});
			const page = await browser.newPage();
			await page.setViewport({ width: 0, height: 0 });
			await page.goto('https://www.instagram.com/accounts/login/');
			await page.waitFor('input[name="username"]');
			await page.focus('input[name="username"]');
			await page.keyboard.type(this._username);
			await page.focus('input[name="password"]');
			await page.keyboard.type(this._password);
			await page.click('button[type="submit"]');
		})();
	}
}

export const template = {
	username: prompt("Please, enter your instagram username: "),
	password: prompt("Please, enter your instagram password: "),
}

export const myPage = new InstagramLogin(template)