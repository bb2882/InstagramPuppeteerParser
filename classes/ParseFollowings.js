import ExtendableParse from "./ExtendableParse.js";

class ParseFollowings extends ExtendableParse {
    constructor() {
        super()
        this._account
        this.tableName = 'following'
    }
    
}

export const parseFollowings = new ParseFollowings()