import { myPage, prompt } from "./classes/InstagramLogin.js";
import { parseFollowers } from "./classes/ParseFollowers.js"
import { parseFollowings } from "./classes/ParseFollowings.js"
import { parsePosts } from "./classes/ParsePosts.js"

let obj = {
	myPage: myPage,
	parseFollowers: parseFollowers,
	parseFollowings: parseFollowings,
	parsePosts: parsePosts,
}

class Start {
	constructor(obj) {
		this._myPage = obj.myPage
		this._parseFollowers = obj.parseFollowers
		this._parseFollowings = obj.parseFollowings
		this._parsePosts = obj.parsePosts
	}

	start() {
		this._myPage.login()
		if (this._myPage.account != null) {
			this._myPage.setAccountName([this._parseFollowers, this._parseFollowings, this._parsePosts])

			if (this._parseFollowers.answer == 'yes') {
				console.log(parseFollowers.account)
				this._parseFollowers.parse()
			}
			
			if (this._parseFollowings.answer == 'yes') {
				console.log(parseFollowings.account)
				this._parseFollowings.parse()
			}
			
			if (this._parsePosts.answer == 'yes'){
				console.log(parsePosts.account)
				this._parsePosts.parse()
			}
			
			// switch(true) {
			// 	case (this._parseFollowers.answer == 'yes'):
			// 		console.log(parseFollowers.account)
			// 		this._parseFollowers.parse()
			// 	case (this._parseFollowings.answer == 'yes'):
			// 		console.log(parseFollowings.account)
			// 		this._parseFollowings.parse()
			// 	case (this._parsePosts.answer == 'yes'):
			// 		console.log(parsePosts.account)
			// 		this._parsePosts.parse()
			// }
		}
	}
}

const start = new Start(obj)
start.start()