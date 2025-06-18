//funcao.js
let contador = 0;

function atualizarValor() {
    document.getElementById("valor").textContent = contador;
}

function aumentar() {
    contador++;
    atualizarValor();
}

function diminuir() {
    contador--;
    atualizarValor();
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-aumentar").addEventListener("click", aumentar);
    document.getElementById("btn-diminuir").addEventListener("click", diminuir);
});

//index.html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contador de Número</title>
</head>
<body>
    <h2>Contador</h2>
    <div id="valor">0</div>
    <button id="btn-aumentar">Aumentar</button>
    <button id="btn-diminuir">Diminuir</button>

    <!-- Importando o JavaScript -->
    <script src="script.js"></script>
</body>
</html>
