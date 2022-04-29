import { myPage } from "./classes/InstagramLogin.js";
import { parse } from "./classes/Parse.js";
import { parseFollowers } from "./classes/ParseFollowers.js"
import { parseFollowings } from "./classes/ParseFollowings.js"
import { parsePosts } from "./classes/ParsePosts.js"

let obj = {
	myPage: myPage,
	parse: parse,
	parseFollowers: parseFollowers,
	parseFollowings: parseFollowings,
	parsePosts: parsePosts,
}

class Start {
	constructor(obj) {
		this._myPage = obj.myPage
		this._parse = obj.parse
		this._parseFollowers = obj.parseFollowers
		this._parseFollowings = obj.parseFollowings
		this._parsePosts = obj.parsePosts
	}

	start() {
		this._myPage.login()

		if (this._parse.account != null) {

			this._parseFollowers.checkForName(this._parse.work, this._parse.account)
			this._parseFollowings.checkForName(this._parse.work, this._parse.account)
			this._parsePosts.checkForName(this._parse.work, this._parse.account)


			if (this._parseFollowers.account != null) {
				this._parseFollowers.parse()
			}
			
			if (this._parseFollowings.account != null) {
				this._parseFollowings.parse()
			}
			
			if (this._parsePosts.account != null){
				this._parsePosts.parse()
			}
			
		// 	// switch(true) {
		// 	// 	case (this._parseFollowers.answer == 'yes'):
		// 	// 		console.log(parseFollowers.account)
		// 	// 		this._parseFollowers.parse()
		// 	// 	case (this._parseFollowings.answer == 'yes'):
		// 	// 		console.log(parseFollowings.account)
		// 	// 		this._parseFollowings.parse()
		// 	// 	case (this._parsePosts.answer == 'yes'):
		// 	// 		console.log(parsePosts.account)
		// 	// 		this._parsePosts.parse()
		// 	// }
		}
	}
}

const start = new Start(obj)
start.start()