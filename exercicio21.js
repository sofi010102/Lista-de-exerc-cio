//html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Tecla Pressionada</title>
</head>
<body>

    <h2>Digite algo:</h2>
    <input type="text" id="inputTecla" placeholder="Digite aqui">
    <p>Última tecla pressionada: <span id="teclaPressionada">Nenhuma</span></p>

    <script>
        const input = document.getElementById("inputTecla");
        const span = document.getElementById("teclaPressionada");

        input.addEventListener("keydown", function(e) {
            span.textContent = e.key;
        });
    </script>

</body>
</html>
