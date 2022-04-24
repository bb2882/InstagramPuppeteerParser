import puppeteer from 'puppeteer'
import ps from 'prompt-sync';
export const prompt = ps()

class InstagramLogin {
	constructor(template) {
		this._username = template.username
		this._password = template.password
		this._account = template.account
	}

	get account() {
		return this._account
	}

	setAccountName(array) {
		array.forEach( obj => {
			obj.account = this._account
		})
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
	account: (function() {
        let question =  prompt("Do you want to work with any account? ")
    
        if (question.toLowerCase().trim() == "yes") {
            return prompt("Write account name, please ").toLowerCase().trim()
        } else {
            return null
        }
        
    })(),
}

export const myPage = new InstagramLogin(template)