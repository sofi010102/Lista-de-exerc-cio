//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Calculadora Simples</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Calculadora Simples</h2>
    <form name="formulario">
        Número 1: <input type="text" name="n1"><br><br>
        Número 2: <input type="text" name="n2"><br><br>

        <input type="button" value="Adição" onclick="adicao()">
        <input type="button" value="Subtração" onclick="subtracao()">
        <input type="button" value="Multiplicação" onclick="multiplicacao()">
        <input type="button" value="Divisão" onclick="divisao()">
    </form>
</body>
</html>

//js
function obterNumeros() {
    const n1 = parseFloat(document.formulario.n1.value);
    const n2 = parseFloat(document.formulario.n2.value);

    if (isNaN(n1) || isNaN(n2)) {
        alert('Por favor, insira números válidos.');
        return null;
    }
    return { n1, n2 };
}

function adicao() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.n1 + numeros.n2;
        alert('Resultado da adição: ' + resultado);
    }
}

function subtracao() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.n1 - numeros.n2;
        alert('Resultado da subtração: ' + resultado);
    }
}

function multiplicacao() {
    const numeros = obterNumeros();
    if (numeros) {
        const resultado = numeros.n1 * numeros.n2;
        alert('Resultado da multiplicação: ' + resultado);
    }
}

function divisao() {
    const numeros = obterNumeros();
    if (numeros) {
        if (numeros.n2 === 0) {
            alert('Não é possível dividir por zero.');
            return;
        }
        const resultado = numeros.n1 / numeros.n2;
        alert('Resultado da divisão: ' + resultado);
    }
}

