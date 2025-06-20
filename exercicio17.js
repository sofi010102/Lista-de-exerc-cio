//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Quiz de Matemática</title>
    <script src="script.js"></script>
</head>
<body>
    <h2>Quiz de Matemática</h2>

    <form name="quiz">

        <p>1) Quanto é 5 + 7?</p>
        <input type="radio" name="q1" value="a"> 10 <br>
        <input type="radio" name="q1" value="b"> 11 <br>
        <input type="radio" name="q1" value="c"> 12 <br>
        <input type="radio" name="q1" value="d"> 13 <br><br>

        <p>2) Quanto é 9 x 6?</p>
        <input type="radio" name="q2" value="a"> 42 <br>
        <input type="radio" name="q2" value="b"> 54 <br>
        <input type="radio" name="q2" value="c"> 56 <br>
        <input type="radio" name="q2" value="d"> 64 <br><br>

        <input type="button" value="Verificar Respostas" onclick="verificar()">

    </form>

    <h3 id="resultado"></h3>
</body>
</html>

//js
function verificar() {
    let acertos = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === 'c') {
        acertos++;
    }

    if (q2 && q2.value === 'b') {
        acertos++;
    }

    document.getElementById('resultado').innerText = 
        `Você acertou ${acertos} de 2 questões.`;
}







