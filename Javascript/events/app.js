const handleClick = (event) => {
    console.log('button click event is triggered')
}
const button = document.querySelector('button');
if(button) button.addEventListener('click', handleClick)
// button.addEventListener('click', handleClick)