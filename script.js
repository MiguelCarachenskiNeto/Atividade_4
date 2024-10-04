let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('numberInput');
    const number = numberInput.value;
    if (number) {
        numbers.push(number);
        numberInput.value = '';
        displayNumbers();
    }
}

function displayNumbers() {
    const numbersList = document.getElementById('numbersList');
    numbersList.innerHTML = 'Números: ' + numbers.join(', ');
}

function sortearNumero() {
    if (numbers.length > 0) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const sorteado = numbers[randomIndex];
        document.getElementById('resultado').innerText = 'Número sorteado: ' + sorteado;
    } else {
        document.getElementById('resultado').innerText = 'Nenhum número para sortear.';
    }
}
