//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Mudar Cor de Fundo</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Escolha uma cor para o fundo:</h2>

    <form name="cores">
        <input type="radio" name="cor" value="red" onchange="mudarCor()"> Vermelho <br>
        <input type="radio" name="cor" value="blue" onchange="mudarCor()"> Azul <br>
        <input type="radio" name="cor" value="green" onchange="mudarCor()"> Verde <br>
        <input type="radio" name="cor" value="yellow" onchange="mudarCor()"> Amarelo <br>
    </form>
</body>
</html>

//js
function mudarCor() {
    const opcoes = document.getElementsByName('cor');

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            document.body.style.backgroundColor = opcoes[i].value;
            break;
        }
    }
}

