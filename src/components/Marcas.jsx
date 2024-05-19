import React, { useState, useEffect } from 'react';
import MarcasHeader from './MarcasHeader';
import Button from '@mui/material/Button';
import FormCadastroMarcas from './FormMarca';
import { AuthProvider } from '../contexts/auth';
import '../styles/global'; // Importe o arquivo CSS de estilos

const Marcas = () => {
  const [marcas, setMarcas] = useState([]); // Estado para armazenar as marcas
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar a abertura do modal
  const [currentPage, setCurrentPage] = useState(1); // Estado para armazenar a página atual
  const [marcasPerPage] = useState(6); // Número de marcas por página

  useEffect(() => {
    fetchMarcas(); // Chame a função para buscar as marcas quando o componente montar
  }, []);

  const fetchMarcas = async () => {
    try {
      const response = await fetch('http://192.168.0.109:5500/api/pesquisas'); // Endpoint para buscar marcas
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const uniqueMarcas = [...new Set(data.map((pesquisa) => pesquisa.marca))];
      setMarcas(uniqueMarcas);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const indexOfLastMarca = currentPage * marcasPerPage;
  const indexOfFirstMarca = indexOfLastMarca - marcasPerPage;
  const currentMarcas = marcas.slice(indexOfFirstMarca, indexOfLastMarca);
  const totalPages = Math.ceil(marcas.length / marcasPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      // Envie os dados para o servidor aqui
      console.log('Dados do formulário:', formData);
  
      // Se necessário, atualize os dados da página após o envio bem-sucedido
      fetchMarcas(); // Por exemplo, atualize a lista de marcas após o envio
      // Feche o modal após o envio bem-sucedido
  
      // Exiba uma mensagem de sucesso ou faça outras ações necessárias
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Exiba uma mensagem de erro ou faça outras ações necessárias em caso de erro
    }
  };

  return (
    <div className='pesquisa'>
       <MarcasHeader />
      <div className='marcas--list'>
      <ul className='list--container--marcas'>
        {currentMarcas.map((marca, index) => (
          <h2 className='list--marcas' key={index}>{marca}</h2>
        ))}
      </ul>

      </div>
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
      {modalOpen && (
        <AuthProvider>
          <FormCadastroMarcas onSubmit={handleFormSubmit} onClose={() => setModalOpen(false)} />
        </AuthProvider>
      )}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <span
  className={`arrow ${currentPage === 1 ? 'disabled' : '' } close`}
  onClick={prevPage}
  style={{ marginRight: '10px', opacity: currentPage === 1 ? 0.5 : 1 }}
>
  {'<'}
</span>
<span>Página {currentPage} de {totalPages}</span>
<span
  className={`arrow ${currentPage === totalPages ? 'disabled' : ''} close`}
  onClick={nextPage}
  style={{ marginLeft: '10px', opacity: currentPage === totalPages ? 0.5 : 1 }}
>
  {'>'}
</span>

      </div>
    </div>
    
  );
}

export default Marcas;
