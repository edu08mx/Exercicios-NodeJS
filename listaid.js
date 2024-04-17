const express = require('express');
const app = express();
app.use(express.json());

const usuarios = [
  { nome: 'Eduardo', idade: 25, email: 'eduardo@eduardo.com' },
  { nome: 'Maria', idade: 30, email: 'maria@maria.com' },
  { nome: 'Teste', idade: 22, email: 'teste@teste.com' },
  { nome: 'Stratus', idade: 35, email: 'stratus@stratus.com'}
];

app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  usuarios.push(novoUsuario);
  
  const usuariosOrdenadosPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
  res.json(usuariosOrdenadosPorIdade);
});

app.post('/usuarios/ordenarPorNome', (req, res) => {
  const usuariosComNomeValido = usuarios.filter(usuario => usuario.nome);
  const usuariosOrdenadosPorNome = usuariosComNomeValido.sort((a, b) => a.nome.localeCompare(b.nome));
  res.json(usuariosOrdenadosPorNome);
});


app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
