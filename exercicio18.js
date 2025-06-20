//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Botão com Cor Aleatória</title>
</head>
<body>
    <h2>Botão que muda de cor</h2>

    <button id="btnCor">Clique aqui</button>

    <script>
        const botao = document.getElementById('btnCor');

        botao.addEventListener('click', function() {
            const cores = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'gray'];
            const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
            botao.style.backgroundColor = corAleatoria;
        });
    </script>
</body>
</html>
