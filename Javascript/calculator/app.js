const buttonsArray = [
    {title: '1'},
    {title: '/'},
    {title: '2'},
    {title: '3'},
    {title: '4'},
    {title: '+'},
    {title: '5'},
    {title: '6'},
    {title: '7'},
    {title: '-'},
    {title: '8'},
    {title: '9'},
    {title: '0'},
    {title: '*'},
]

const buttonsParent = document.querySelector('.buttons-section');
const input = document.querySelector('input');

buttonsArray.forEach((item) => {
    const button = document.createElement('button');
    button.innerText = item.title;
    button.addEventListener('click', () => {
        input.value += item.title;
        // input.value = input.value + item.title;
    })
    buttonsParent.appendChild(button);
})

const onSubmit = () => {
    const result = eval(input.value);
    input.value = result;
}

const clearInput = () => {
    input.value = '';
}