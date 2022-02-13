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
document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('genarate-display').value;
    const verifyPin = document.getElementById('pin-display').value;
    if (pin == verifyPin) {
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    } else {
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';
    }
});