import ExtendableParse from "./ExtendableParse.js";

class ParseFollowers extends ExtendableParse {
    constructor() {
        super()
        this._account
        this.tableName = 'followers'
    }

}

export const parseFollowers = new ParseFollowers()

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
 
const result = arr.map(item => Object.entries(item))
console.log(result)