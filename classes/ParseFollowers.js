import ExtendableParse from "./ExtendableParse.js";

class ParseFollowers extends ExtendableParse {
    constructor() {
        super()
        this._account
        this.tableName = 'followers'
    }

}

export const parseFollowers = new ParseFollowers()