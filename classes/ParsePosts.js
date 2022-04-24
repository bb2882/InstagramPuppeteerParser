import { prompt } from './InstagramLogin.js';
import { template as loginTemplate}  from './InstagramLogin.js';
import { mongoConnection } from '../mongoDB.js';

class ParsePosts {
    constructor(template) {
        this._account
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
        console.log('parsing posts')
        
    }
}

const template = {
    answer: (function() {
        if (loginTemplate.account != null) {
            let question =  prompt("Do you want to parse posts? ")
        
            if (question.toLowerCase().trim() == "yes") {
                return question
            } else {
                return null
            }
        } else {
            return null
        }
        
    })()
}

export const parsePosts = new ParsePosts(template)