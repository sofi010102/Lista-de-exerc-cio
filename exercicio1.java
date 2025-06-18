//index.html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Verificar Número Par ou Ímpar</title>
    <script src="script.js"></script> 
</head>
<body>
    <h2>Verificador de Número Par ou Ímpar</h2>
    <form name="formulario1">
        Número: <input type="text" name="n" />
        <input type="button" value="Verificar" onclick="verificarNumero()" />
    </form>
</body>
</html>

//funcao.js
function verificarNumero() {
    const n = parseFloat(document.formulario1.n.value);

    if (isNaN(n)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    if (n % 2 === 0) {
        alert('Seu número é par');
    } else {
        alert('Seu número é ímpar');
    }
}

