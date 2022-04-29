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
console.log(1)

})();


