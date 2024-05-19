// models/pessoa.js
const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
  nomeCompleto: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  rg: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nomeMae: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: Date,
    required: true
  },
  chavePix: {
    type: String,
    required: true
  }
});

const Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;
