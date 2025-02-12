const input = document.querySelector('.row input');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (button.id === 'clear') {
            input.value = '';
        }
        else if (button.id === 'delete') {
            input.value = input.value.slice(0, -1);
        }
        else if (button.classList.contains('equal')) {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
        }
        else {
            input.value += buttonText;
        }
    });
});