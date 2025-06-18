//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cálculo de Média</title>
</head>
<body>
    <h2>Informe suas 3 notas</h2>
    <form name="formularioNotas">
        Nota 1: <input type="text" name="nota1" /><br />
        Nota 2: <input type="text" name="nota2" /><br />
        Nota 3: <input type="text" name="nota3" /><br /><br />
        <input type="button" value="Calcular Média" onclick="calcularMedia()" />
    </form>

    <script src="script.js"></script>
</body>
</html>

  //js
  function calcularMedia() {
    const n1 = parseFloat(document.formularioNotas.nota1.value);
    const n2 = parseFloat(document.formularioNotas.nota2.value);
    const n3 = parseFloat(document.formularioNotas.nota3.value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert('Por favor, digite três notas válidas.');
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    const mediaArredondada = media.toFixed(2);

    if (media >= 7) {
        alert(`Média: ${mediaArredondada}\nSituação: Aprovado!`);
    } else {
        alert(`Média: ${mediaArredondada}\nSituação: Reprovado.`);
    }
}
