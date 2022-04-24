import { prompt } from './InstagramLogin.js';
import { template as loginTemplate}  from './InstagramLogin.js';
import { mongoConnection } from '../mongoDB.js';

class ParseFollowings {
    constructor(template) {
        this._answer = template.answer
    }

    get answer() {
        return this._answer
    }

    set account(name) {
        this._account = name
    }

    get account() {
		return this._account
	}

    parse() {
        console.log('parsing followings')
    }
}

const template = {
    answer: (function() {
        if (loginTemplate.account != null) {
            let question =  prompt("Do you want to parse followings? ")
        
            if (question.toLowerCase().trim() == "yes") {
                return question.toLowerCase().trim()
            } else {
                return null
            }
        } else {
            return null
        }
        
    })()
}

export const parseFollowings = new ParseFollowings(template)