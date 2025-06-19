//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Conversor de Temperatura</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Conversor de Temperatura</h2>

    <label>Digite o valor da temperatura:</label><br><br>
    <input type="text" id="valor"><br><br>

    <button onclick="converterParaCelsius()">Converter para °C</button>
    <button onclick="converterParaFahrenheit()">Converter para °F</button>

    <p id="resultado"></p>
</body>
</html>

//js
function converterParaCelsius() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (isNaN(valor)) {
        document.getElementById('resultado').innerText = 'Por favor, digite um valor válido.';
        return;
    }

    const celsius = (valor - 32) * 5 / 9;
    document.getElementById('resultado').innerText = 
        valor + '°F é igual a ' + celsius.toFixed(2) + '°C';
}

function converterParaFahrenheit() {
    const valor = parseFloat(document.getElementById('valor').value);

    if (isNaN(valor)) {
        document.getElementById('resultado').innerText = 'Por favor, digite um valor válido.';
        return;
    }

    const fahrenheit = (valor * 9 / 5) + 32;
    document.getElementById('resultado').innerText = 
        valor + '°C é igual a ' + fahrenheit.toFixed(2) + '°F';
}
