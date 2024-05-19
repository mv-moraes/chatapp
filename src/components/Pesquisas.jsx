import React, { useState, useEffect } from 'react';
import PesquisaHeader from './PesquisaHeader';
import FormPesquisa from './FormPesquisa';
import Button from '@mui/material/Button';
import PesquisaItem from './PesquisaItem'; // Importe o componente PesquisaItem aqui
import { AuthProvider } from '../contexts/auth';

function Pesquisas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pesquisas, setPesquisas] = useState([]); // Adicione o estado para armazenar as pesquisas
  const [currentPage, setCurrentPage] = useState(1); // Estado para armazenar a página atual
  const [pesquisasPerPage] = useState(6); // Número de pesquisas por página

  useEffect(() => {
    fetchPesquisas(); // Chame a função para buscar as pesquisas quando o componente montar
  }, []);

  const fetchPesquisas = async () => {
    try {
      const response = await fetch('http://192.168.0.109:5500/api/pesquisas');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPesquisas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Índices da primeira e última pesquisa na página atual
  const indexOfLastPesquisa = currentPage * pesquisasPerPage;
  const indexOfFirstPesquisa = indexOfLastPesquisa - pesquisasPerPage;

  // Pesquisas na página atual
  const currentPesquisas = pesquisas.slice(indexOfFirstPesquisa, indexOfLastPesquisa);

  // Número total de páginas
  const totalPages = Math.ceil(pesquisas.length / pesquisasPerPage);

  // Função para mudar para a próxima página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Função para mudar para a página anterior
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
      fetchPesquisas(); // Por exemplo, atualize a lista de pesquisas após o envio
       // Feche o modal após o envio bem-sucedido
  
      // Exiba uma mensagem de sucesso ou faça outras ações necessárias
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Exiba uma mensagem de erro ou faça outras ações necessárias em caso de erro
    }
  };
  return (
    
    <div className='pesquisa'>
      <PesquisaHeader />
      <ul className='pesquisa-list'>
        {currentPesquisas.map((pesquisa) => (
          <PesquisaItem
          key={pesquisa.id}
          pesquisa={{
            ...pesquisa,
            data: new Date(pesquisa.data).toLocaleDateString('pt-BR')
          }}
        />
        ))}
      </ul>
      <div className="button-container" style={{ marginTop: '20px', textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: '25px', width: '300px', padding: '12px' }}
          onClick={() => setModalOpen(true)}
        >
          Criar Nova Pesquisa
        </Button>
      </div>
      {modalOpen && (
        <AuthProvider>
        <FormPesquisa onSubmit={handleFormSubmit} onClose={() => setModalOpen(false)} />

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

export default Pesquisas;
