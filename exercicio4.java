//funcao.js
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
    const palpite = parseInt(document.formularioAdivinha.palpite.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        alert('Por favor, digite um número válido entre 1 e 10.');
        return;
    }

    if (palpite === numeroSecreto) {
        alert('Parabéns! Você acertou o número!');
    } else {
        alert(`Errado! O número era ${numeroSecreto}. Tente novamente recarregando a página.`);
    }
}

//index.html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Jogo de Adivinhação</title>
    <script src="script.js"></script> 
</head>
<body>
    <h2>Tente adivinhar o número de 1 a 10</h2>
    <form name="formularioAdivinha">
        Seu palpite: <input type="text" name="palpite" />
        <input type="button" value="Verificar" onclick="verificarPalpite()" />
    </form>
</body>
</html>
