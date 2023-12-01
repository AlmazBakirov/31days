document.addEventListener('DOMContentLoaded', function () {

    function calculate(inputValue) {
        const expression = /^[0-9.+-/*]+$/;
        if (expression.test(inputValue)) {
            return new Function('return ' + inputValue)();
        }
        return 'Invalid Input';
    }

    const screen = document.getElementById('screen');
    document.querySelectorAll('.calculator-keys button').forEach(button => {
        button.addEventListener('click', function () {
            if (this.value === 'all-clear') {
                screen.value = '';
            } else if (this.value === '=') {
                screen.value = calculate(screen.value);
            } else {
                screen.value += this.value;
            }
        });
    });

    document.addEventListener('keydown', function (event) {
        if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.'].includes(event.key)) {
            screen.value += event.key;
        }
        if (event.key === 'Enter' || event.key === '=') {
            screen.value = calculate(screen.value);
            event.preventDefault();
        }
        if (event.key === 'Backspace') {
            screen.value = screen.value.slice(0, -1);
        }
        if (event.key === 'Escape') {
            screen.value = '';
        }
    });

});
