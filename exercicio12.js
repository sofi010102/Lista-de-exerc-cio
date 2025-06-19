//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Quiz de Pergunta</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Qual é a capital do Brasil?</h2>

    <form name="quiz">
        <input type="radio" name="resposta" value="a"> Rio de Janeiro<br>
        <input type="radio" name="resposta" value="b"> São Paulo<br>
        <input type="radio" name="resposta" value="c"> Brasília<br>
        <input type="radio" name="resposta" value="d"> Belo Horizonte<br><br>

        <input type="button" value="Verificar Resposta" onclick="verificarResposta()">
    </form>
</body>
</html>

//js
function verificarResposta() {
    const opcoes = document.getElementsByName('resposta');
    let selecionado = '';

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            selecionado = opcoes[i].value;
            break;
        }
    }

    if (selecionado === '') {
        alert('Por favor, selecione uma opção.');
        return;
    }

    if (selecionado === 'c') {
        alert('Parabéns! Resposta correta.');
    } else {
        alert('Resposta incorreta. A resposta correta é Brasília.');
    }
}
