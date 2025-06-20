//html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Ativar Botão com Checkbox</title>
</head>
<body>

    <label>
        <input type="checkbox" id="checkPermissao">
        Aceito os termos
    </label>

    <br><br>

    <button id="btnEnviar" disabled>Enviar</button>

    <script>
        const checkbox = document.getElementById("checkPermissao");
        const botao = document.getElementById("btnEnviar");

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                botao.disabled = false;
            } else {
                botao.disabled = true;
            }
        });
    </script>

</body>
</html>

