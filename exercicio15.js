//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cronômetro</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Cronômetro</h2>

    <h1 id="display">00:00:00</h1>

    <button onclick="iniciar()">Iniciar</button>
    <button onclick="pausar()">Pausar</button>
    <button onclick="zerar()">Zerar</button>
</body>
</html>

//js
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function iniciar() {
    clearInterval(intervalo);
    intervalo = setInterval(contarTempo, 1000);
}

function pausar() {
    clearInterval(intervalo);
}

function zerar() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('display').innerText = '00:00:00';
}

function contarTempo() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    const formatar = (valor) => valor < 10 ? '0' + valor : valor;

    document.getElementById('display').innerText = 
        `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`;
}

