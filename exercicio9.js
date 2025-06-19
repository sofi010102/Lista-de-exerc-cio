//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Mudar Cor de Fundo</title>
    <script>
        function mudarCor() {
            const cor = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = cor;
        }
    </script>
</head>
<body>
    <h2>Clique no botão para mudar a cor de fundo</h2>
    <button onclick="mudarCor()">Mudar Cor</button>
</body>
</html>
