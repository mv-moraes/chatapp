import React from 'react';
import ModalDetalhesPessoa from './ModalPessoas'; // Supondo que você tenha um componente Modal para exibir modais

const ModalPessoasDetalhes = ({ person, onClose }) => {
  return (
    <ModalDetalhesPessoa onClose={onClose}>
      <div>
        <h2>Detalhes da Pessoa</h2>
        <p>Nome Completo: {person.nomeCompleto}</p>
        <p>CPF: {person.cpf}</p>
        <p>RG: {person.rg}</p>
        <p>Telefone: {person.telefone}</p>
        <p>Email: {person.email}</p>
        <p>Nome da Mãe: {person.mae}</p>
        <p>Data de Nascimento: {person.dataNascimento}</p>
        <p>Chave PIX: {person.pix}</p>
        {/* Adicione outros detalhes da pessoa conforme necessário */}
      </div>
    </ModalDetalhesPessoa>
  );
};

export default ModalPessoasDetalhes;
