//index
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
        <form name="formularioContato">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required />

            <label for="assunto">Assunto:</label>
            <input type="text" id="assunto" name="assunto" required />

            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

            <button type="submit">Enviar</button>
        </form>
    </section>
</body>
</html>

  //css
  body {
    font-family: Arial, sans-serif;
    background-color: #eef2f3;
    margin: 0;
    padding: 0;
}

.contato {
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.contato h1 {
    text-align: center;
    color: #333;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 15px;
    font-weight: bold;
}

input, textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
}

button {
    margin-top: 20px;
    padding: 12px;
    background-color: #4caf50;
    color: white;
    border: none;
    font-size: 1em;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background-color: #45a049;
}
