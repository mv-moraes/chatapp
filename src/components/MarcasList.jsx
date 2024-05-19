import React, { useState, useEffect } from 'react';
import FormMarca from './FormMarca'; // Importe o componente FormMarca aqui
import Button from '@mui/material/Button';

const MarcasList = () => {
  const [marcas, setMarcas] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal

  useEffect(() => {
    const fetchPesquisas = async () => {
      try {
        const response = await fetch('http://192.168.0.109:5500/api/pesquisas');
        if (!response.ok) {
          throw new Error('Failed to fetch pesquisas');
        }
        const data = await response.json();
        const uniqueMarcas = [...new Set(data.map((pesquisa) => pesquisa.marca))];
        setMarcas(uniqueMarcas);
      } catch (error) {
        console.error('Error fetching pesquisas:', error);
      }
    };

    fetchPesquisas();
  }, []);

  // Função para abrir o modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='marcas--list'>
      <ul className='list--container--marcas'>
        {marcas.map((marca, index) => (
          <div className='list--marcas' key={index}>
            <div className='marcas--detail'>
              <h2>{marca}</h2> {/* Aqui será o nome da marca */}
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
          Cadastrar Marca
        </Button>
      </div>
      {modalOpen && <FormMarca onClose={closeModal} />}
    </div>
  );
}

export default MarcasList;
