const handleClick = (event) => {
    console.log('button click event is triggered')
}
const button = document.querySelector('button');
if(button) button.addEventListener('mouseenter', handleClick)
// button.addEventListener('click', handleClick)