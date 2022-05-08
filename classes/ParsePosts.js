import { mongoConnection } from '../mongoDB.js';

class ParsePosts {
    constructor() {
        this._account
    }

    get account() {
        return this._account
    }
    
    checkForName(arr, account) {
        arr.forEach(name => {
            if (name == 'parse posts') {
                this._account = account
            }
        })
    }

    parse() {
        console.log('parsing posts')
    }
}


export const parsePosts = new ParsePosts()