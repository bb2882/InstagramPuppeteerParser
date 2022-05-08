import { mongoConnection } from '../mongoDB.js';

class ParseFollowers {
    constructor() {
        this._account
    }

    get account() {
        return this._account
    }

    checkForName(arr, account) {
        arr.forEach(name => {
            if (name == 'parse followers') {
                this._account = account
            }
        })
    }

    parse() {
        console.log('parsing followers')
    }
}



export const parseFollowers = new ParseFollowers()