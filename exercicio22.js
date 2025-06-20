//html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Parágrafo Desaparece</title>
</head>
<body>

    <p id="paragrafo">Dê dois cliques neste parágrafo para fazê-lo desaparecer.</p>

    <script src="script.js"></script>
</body>
</html>

//js
const paragrafo = document.getElementById("paragrafo");

paragrafo.addEventListener("dblclick", function() {
    paragrafo.style.display = "none";
});
