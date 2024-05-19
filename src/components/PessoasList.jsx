import React, { useState, useEffect } from 'react';
import ModalPessoaDetalhes from './ModalPessoas'; // Importe o componente ModalPessoa aqui
import Button from '@mui/material/Button';


const PessoasList = () => {
  const [pessoas, setPessoas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal
  const [selectedPerson, setSelectedPerson] = useState(null); // Estado para armazenar a pessoa selecionada

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const response = await fetch('http://192.168.0.109:5500/api/pessoas'); // Substitua pela URL da sua API de pessoas
        if (!response.ok) {
          throw new Error('Failed to fetch pessoas');
        }
        const data = await response.json();
        setPessoas(data);
      } catch (error) {
        console.error('Error fetching pessoas:', error);
      }
    };

    fetchPessoas();
  }, []);

  // Função para abrir o modal com os detalhes da pessoa selecionada
  const openModal = (person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='marcas--list'>
      <ul className='list--container--marcas'>
        {pessoas.map((pessoa, index) => (
          <div className='list--marcas' key={index}>
            <div className='marcas--detail' onClick={() => openModal(pessoa)}>
              <h2>{pessoa.nomeCompleto}</h2> {/* Nome da pessoa */}
              <p>CPF: {pessoa.cpf}</p> {/* CPF da pessoa */}
              <p>Telefone: {pessoa.telefone}</p> {/* Telefone da pessoa */}
            </div>
          </div>
        ))}
      </ul>
      <div className="button-container" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '25px', width: '300px', padding: '12px' }}
          onClick={() => setModalOpen(true)}
        >
          Adicionar Pessoa
        </Button>
      </div>
      {modalOpen && <ModalPessoaDetalhes person={selectedPerson} onClose={closeModal} />}
    </div>
  );
}

export default PessoasList;
