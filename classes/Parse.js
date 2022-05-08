import prompts from 'prompts';
import { prompt } from './InstagramLogin.js';

class Parse{
    constructor(template) {
        this._work = template.work.value
        this._account = template.account
    }

    get work() {
        return this._work
    }
    
    get account() {
        return this._account
    }
}

const work = await prompts({
    type: 'multiselect',
    name: 'value',
    message: 'What would you like to do?',
    choices: [
        { title: "Parse followers", value: 'parse followers' },
        { title: "Parse followings", value: 'parse followings' },
        { title: "Parse posts", value: 'parse posts' }
    ],
    max: 3,
    hint: '- Space to select. Return to submit'
})

console.log(work)

export const template = {
    work: work,

	account: (function() {
        
		if (work.value.length != 0 ) {
			return prompt("Write account name, please: ").toLowerCase().trim()
		} else {
			return null
		}
    })(),
}

export const parse = new Parse(template)