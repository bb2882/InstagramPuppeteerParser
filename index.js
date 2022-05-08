import { myPage } from "./classes/InstagramLogin.js";
import { parse } from "./classes/Parse.js";
import { parseFollowers } from "./classes/ParseFollowers.js"
import { parseFollowings } from "./classes/ParseFollowings.js"
import { parsePosts } from "./classes/ParsePosts.js"

let obj = {
	myPage: myPage,
	parse: parse,
	parseArray: [parseFollowers, parseFollowings, parsePosts]
}

class Start {
	constructor(obj) {
		this._myPage = obj.myPage
		this._parse = obj.parse
		this._parseArray = obj.parseArray
		this._checkedParseArray = []
	}

	start() {
		if (this._parse.account != null) {

			this._myPage.account = this._parse.account

			this._parseArray.forEach(obj => {
				obj.checkForName(this._parse.work, this._parse.account)

				if (obj.account != null) {
					this._checkedParseArray.push(obj)
				}
			})

			this._myPage.login(this._checkedParseArray)

		} else {
			this._myPage.login()
		}
	}
}

const start = new Start(obj)
start.start()