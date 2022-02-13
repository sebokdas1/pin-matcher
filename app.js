function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if (pinString.length == 5) {
        return pin;
    } else {

        return getPin();
    };

};
document.getElementById('genarate-button').addEventListener('click', function () {
    const pin = getPin();
    document.getElementById('genarate-display').value = pin;
});


document.getElementById('key-pad').addEventListener('click', function (e) {
    const number = e.target.innerText;
    const calcInput = document.getElementById('pin-display');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }

    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});