//js
function calcularIMC() {
    const peso = parseFloat(document.formulario.peso.value);
    const altura = parseFloat(document.formulario.altura.value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert('Por favor, insira peso e altura válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 40) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III (mórbida)';
    }

    alert('Seu IMC é ' + imc.toFixed(2) + ' - ' + classificacao);
}


//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Calculadora de IMC</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Calculadora de IMC</h2>
    <form name="formulario">
        Peso (kg): <input type="text" name="peso"><br><br>
        Altura (m): <input type="text" name="altura"><br><br>
        <input type="button" value="Calcular IMC" onclick="calcularIMC()">
    </form>
</body>
</html>
