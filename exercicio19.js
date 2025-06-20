//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Contador de Cliques</title>
</head>
<body>
    <h2>Contador de Cliques</h2>

    <button id="btnContador">Clique aqui</button>
    <p>Você clicou <span id="contador">0</span> vezes.</p>

    <script>
        let cliques = 0;
        const botao = document.getElementById('btnContador');
        const contador = document.getElementById('contador');

        botao.addEventListener('click', function() {
            cliques++;
            contador.innerText = cliques;
        });
    </script>
</body>
</html>
