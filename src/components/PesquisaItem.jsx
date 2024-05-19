// PesquisaItem.jsx

import React, { useState, useEffect } from 'react';
import '../styles/global'; // Importe o arquivo CSS de estilos

function PesquisaItem({ pesquisa }) {
  const [criadorEmail, setCriadorEmail] = useState('');


  console.log('Pesquisa recebida:', pesquisa); // Adicione um console log para verificar se os dados estão sendo recebidos corretamente
  return (
    <div className='pesquisa-card'>
      <div className="pesquisa-item">
        <h3> {pesquisa.marca}</h3>
        <p>Classe: {pesquisa.classe}</p>
        <p>R$: {pesquisa.valor} 00</p>
        <p>Horario: {pesquisa.horario} Hrs</p>
        <p>Data: {pesquisa.data}</p>
        <p>Situação: {pesquisa.situacao}</p>
        <p className="created-by">Criador: {pesquisa.createdBy.name}</p>
        {/* Adicione outros campos de pesquisa conforme necessário */}
      </div>
    </div>
  );
}

export default PesquisaItem;
