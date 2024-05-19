// models/pesquisaParticipante.js
const mongoose = require('mongoose');

const pesquisaParticipanteSchema = new mongoose.Schema({
  pessoa: { type: mongoose.Schema.Types.ObjectId, ref: 'Pessoa', required: true }, // Referência à pessoa
  pesquisa: { type: mongoose.Schema.Types.ObjectId, ref: 'Pesquisa', required: true }, // Referência à pesquisa
});

const PesquisaParticipante = mongoose.model('PesquisaParticipante', pesquisaParticipanteSchema);

module.exports = PesquisaParticipante;
