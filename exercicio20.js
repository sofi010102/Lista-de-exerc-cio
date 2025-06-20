//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Texto com Hover</title>
    <script src="script.js"></script>
</head>
<body>
    <p id="textoHover">Passe o mouse aqui para ver a mágica!</p>
</body>
</html>

//js
window.onload = function() {
    const texto = document.getElementById('textoHover');
    const textoOriginal = texto.innerText;

    texto.addEventListener('mouseover', function() {
        texto.innerText = 'Você está passando o mouse sobre o texto!';
    });

    texto.addEventListener('mouseout', function() {
        texto.innerText = textoOriginal;
    });
}
