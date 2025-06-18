//index
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Tabuada</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    input, button {
      padding: 8px;
      margin-top: 10px;
    }
    #resultado {
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h2>Gerador de Tabuada</h2>
  <label for="numero">Digite um número inteiro:</label><br>
  <input type="number" id="numero" />
  <button id="botao">Mostrar Tabuada</button>

  <div id="resultado"></div>

  <!-- Carrega o script no final do body -->
  <script src="script.js"></script>

</body>
</html>



//funcao.js
    document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("botao");

  botao.addEventListener("click", function () {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero)) {
      resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, digite um número válido.</p>";
      return;
    }

    let resultado = `<h3>Tabuada do ${numero}</h3>`;
    for (let i = 1; i <= 10; i++) {
      resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultadoDiv.innerHTML = resultado;
  });
});
