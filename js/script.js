function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculateResult() {
    let currentDisplay = document.getElementById('display').value;
    try {
        let result = eval(currentDisplay
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('log', 'Math.log10')
            .replace('sqrt', 'Math.sqrt')
            .replace('pi', 'Math.PI')
            .replace('e', 'Math.E')
            .replace('^', '**'));
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}