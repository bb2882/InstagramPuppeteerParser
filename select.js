import prompts from "prompts";

(async () => {
    const response = await prompts({
        type: 'multiselect',
        name: 'value',
        message: 'Pick colors',
        choices: [
            { title: 'Red', value: '#ff0000' },
            { title: 'Green', value: '#00ff00' },
            { title: 'Blue', value: '#0000ff' }
        ],
        max: 3,
        hint: '- Space to select. Return to submit'
    });

    console.log(response);

})();

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('test1')
        resolve()
    },1000)
})

promise
.then(() => {
    return new Promise(() => {
        setTimeout(() => {
            console.log('test2')
        },1000)
    })
})
.then(() => {
    return new Promise(() => {
        setTimeout(() => {
            console.log('test3')
        },1000)
    })
})
.then(() => {
    return new Promise(() => {
        setTimeout(() => {
            console.log('test4')
        },1000)
    })
})

function range(first, second, third) {
    let fin = []
    while (first != second -1) {
        fin.push(first)
        first += third
    }
    return fin
}

let res = range(5,2, -1)
console.log(res)

function sum(arr) {
    let fin = 0
    for(let i = 0; i < arr.length; i++) {
        fin += arr[i]
    }
    return fin
}

let summ = sum(res)

console.log(summ)