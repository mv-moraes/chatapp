// models/pesquisa.js
const mongoose = require('mongoose');

const pesquisaSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  marca: { type: String, required: true },
  valor: { type: Number, required: true },
  data: { type: Date, required: true },
  horario: { type: String, required: true },
  grupo: { type: String, required: true },
  vagas: { type: Number, required: true },
  ramo: { type: String, required: true },
  classe: { 
    type: String, 
    required: true,
    enum: ['A+', 'A', 'B1', 'B2', 'C1', 'C2', 'D', 'E'] // Define as opções permitidas para a classe
  },
  situacao: { 
    type: String, 
    required: true,
    enum: ['Aberto', 'Fechado', 'Em espera'] // Define as opções permitidas para a situação
  }
});

const Pesquisa = mongoose.model('Pesquisa', pesquisaSchema);

module.exports = Pesquisa;
