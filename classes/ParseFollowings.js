// import { template as parseTemplate } from './Parse.js'
import { mongoConnection } from '../mongoDB.js';

class ParseFollowings {
    constructor() {
        this._account
    }

    get account() {
        return this._account
    }

    checkForName(arr, account) {
        arr.forEach(name => {
            if (name == 'parse followings') {
                this._account = account
            }
        })
    }

    parse() {
        console.log('parsing followings')
    }
}



export const parseFollowings = new ParseFollowings()