const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; // ou qualquer outra porta que você desejar

app.get('/contarpalavras/:filename', (req, res) => {
  const { filename } = req.params;

  // Lê o conteúdo do arquivo de texto de forma assíncrona
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao ler o arquivo.' });
    }

    // Remove espaços em branco extras e quebra de linhas, depois divide o texto em palavras usando espaços como delimitador
    const words = data.trim().split(/\s+/);

    // Conta o número de palavras
    const wordCount = words.length;

    res.json({ numeroPalavras: wordCount });
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
