function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    let result = document.getElementById('result').value;
    if (result !== '' && !isNaN(result[result.length - 1])) {
        document.getElementById('result').value += operator;
    }
}

function appendDecimal() {
    let result = document.getElementById('result').value;
    if (result === '') {
        document.getElementById('result').value = '0.';
    } else if (!result.includes('.')) {
        document.getElementById('result').value += '.';
    }
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    let result = document.getElementById('result').value;
    if (result !== '') {
        try {
            document.getElementById('result').value = eval(result);
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }
}
