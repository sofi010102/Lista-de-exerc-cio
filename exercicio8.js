//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulário de Contato</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <section class="contato">
        <h1>Fale Conosco</h1>
        <form name="formularioContato" onsubmit="return validarFormulario()">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" />

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" />

            <label for="assunto">Assunto:</label>
            <input type="text" id="assunto" name="assunto" />

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5"></textarea>

            <button type="submit">Enviar</button>
        </form>
    </section>

    <script src="script.js"></script>
</body>
</html>

  //js
  function validarFormulario() {
    const nome = document.formularioContato.nome.value.trim();
    const email = document.formularioContato.email.value.trim();
    const assunto = document.formularioContato.assunto.value.trim();
    const mensagem = document.formularioContato.mensagem.value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return false; // impede o envio do formulário
    }

    // Verificação básica de e-mail
    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return true;
}
