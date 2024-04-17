const https = require('https');

const express = require('express');
const app = express();

app.get('/api/data', (req, res) => {
  // Fazendo uma requisição HTTPS GET para a API
  https.get('https://jsonplaceholder.typicode.com/todos/1', (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    });
  }).on('error', (error) => {
    console.error('Erro ao fazer a requisição:', error.message);
    res.status(500).send('Erro ao obter dados da API');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
