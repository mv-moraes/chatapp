import React from 'react';
import '../styles/global'; // Importe o arquivo CSS de estilos


function MarcaItem({ pesquisa }) {
    console.log('Marca recebida:', pesquisa);
  return (
<div className='pesquisa-card'>
<div className="pesquisa-item">
        <h2>{pesquisa.marca}</h2>
        {/* Adicione outros campos da marca conforme necessário */}
        </div>
        </div>
  );
}

export default MarcaItem;
