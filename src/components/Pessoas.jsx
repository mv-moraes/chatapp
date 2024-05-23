import React, { useState, useEffect } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import PessoasHeader from './PessoasHeader';
import FormCadastroPessoas from './FormCadastroPessoas';
import ModalDetalhesPessoa from './ModalDetalhesPessoa';
import '../styles/global';

const Pessoas = () => {
  const [pessoas, setPessoas] = useState([]);
  const [cadastroModalOpen, setCadastroModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de pesquisa
  const [filteredPessoas, setFilteredPessoas] = useState([]); // Estado para armazenar pessoas filtradas

  useEffect(() => {
    fetchPessoas();
  }, []);

  useEffect(() => {
    filterPessoas();
  }, [searchTerm, pessoas]);

  const fetchPessoas = async () => {
    try {
      const response = await fetch('https://pesquisapp.com.br:5500/api/pessoas');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPessoas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterPessoas = () => {
    const filtered = pessoas.filter((pessoa) => {
      const { nomeCompleto, cpf, telefone } = pessoa;
      const search = searchTerm.toLowerCase();
      return (
        nomeCompleto.toLowerCase().includes(search) ||
        cpf.includes(search) ||
        telefone.includes(search)
      );
    });
    setFilteredPessoas(filtered);
  };

  const handleFormSubmit = async (formData) => {
    try {
      console.log('Dados do formulário:', formData);
      fetchPessoas();
      setCadastroModalOpen(false);
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className='pesquisa'>
      <PessoasHeader />
      <TextField
        label="Pesquisar por nome, CPF ou telefone"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: '10px', marginTop: '30px' }}
      />
      <div className='marcas--list'>
        <ul className='list--container--marcas'>
          {filteredPessoas.map((pessoa, index) => (
            <div className='list--marcas' key={index} onClick={() => setSelectedPerson(pessoa)}>
              <h2>{pessoa.nomeCompleto}</h2>
              <p>CPF: {pessoa.cpf}</p>
              <p>Telefone: {pessoa.telefone}</p>
            </div>
          ))}
        </ul>
      </div>
      <div className="button-container" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '25px', width: '300px', padding: '12px' }}
          onClick={() => setCadastroModalOpen(true)}
        >
          Adicionar Pessoa
        </Button>
      </div>
      <Modal open={cadastroModalOpen} onClose={() => setCadastroModalOpen(false)}>
        <FormCadastroPessoas onSubmit={handleFormSubmit} onClose={() => setCadastroModalOpen(false)} />
      </Modal>
      {selectedPerson && <ModalDetalhesPessoa pessoa={selectedPerson} onClose={() => setSelectedPerson(null)} />}
    </div>
  );
}

export default Pessoas;
