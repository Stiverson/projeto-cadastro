const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let filmes = []; // Array para armazenar filmes

// Rota para cadastrar um novo filme
app.post('/filmes', (req, res) => {
  const { titulo, descricao, ano } = req.body;
  const novoFilme = { id: filmes.length + 1, titulo, descricao, ano };
  filmes.push(novoFilme);
  res.status(201).json(novoFilme);
});

// Rota para obter a lista de filmes
app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// Inicia o servidor na porta 4000
app.listen(4000, () => {
  console.log('Servidor rodando em http://localhost:4000');
});
