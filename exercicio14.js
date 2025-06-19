//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Boas-vindas</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Seja bem-vindo(a)!</h2>

    <label>Digite seu nome:</label><br><br>
    <input type="text" id="nome"><br><br>

    <button onclick="saudacao()">Enviar</button>
</body>
</html>

//js
function saudacao() {
    const nome = document.getElementById('nome').value.trim();

    if (nome === '') {
        alert('Por favor, digite seu nome.');
        return;
    }

    alert('Olá ' + nome + '. Seja bem-vindo(a)!');
}

