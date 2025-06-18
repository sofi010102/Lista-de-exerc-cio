//html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Perfil Pessoal</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <section class="perfil">
        <h1>João da Silva</h1>
        <img src="gato.jpg" alt="Foto de João" />
        <p>Olá! Meu nome é João, tenho 25 anos e sou apaixonado por tecnologia, natureza e animais.</p>

        <h2>Meus hobbies:</h2>
        <ul>
            <li>Gatos</li>
            <li>Programar</li>
            <li>Fazer trilhas</li>
            <li>Assistir séries</li>
        </ul>
    </section>
</body>
</html>

  //css
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
}

.perfil {
    background-color: #fff;
    max-width: 600px;
    margin: 50px auto;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.perfil img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
}

.perfil h1 {
    margin-top: 0;
    color: #333;
}

.perfil p {
    font-size: 1.1em;
    color: #555;
}

.perfil ul {
    list-style-type: disc;
    padding-left: 20px;
    text-align: left;
    display: inline-block;
    margin-top: 20px;
}


