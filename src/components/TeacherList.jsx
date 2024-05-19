import React, { useState, useEffect } from 'react';

const TeacherList = () => {
  const [pesquisas, setPesquisas] = useState([]); // Estado para armazenar as pesquisas
  const [currentPage, setCurrentPage] = useState(1); // Estado para armazenar a página atual
  const [pesquisasPerPage] = useState(4); // Número de pesquisas por página

  useEffect(() => {
    // Função para buscar as pesquisas
    const fetchPesquisas = async () => {
      try {
        const response = await fetch('http://192.168.0.109:5500/api/pesquisas'); // Faz a solicitação para o endpoint das pesquisas
        if (!response.ok) {
          throw new Error('Failed to fetch pesquisas');
        }
        const data = await response.json(); // Converte a resposta para JSON
        setPesquisas(data); // Atualiza o estado com os dados das pesquisas
      } catch (error) {
        console.error('Error fetching pesquisas:', error);
      }
    };

    // Chama a função de busca de pesquisas quando o componente monta
    fetchPesquisas();
  }, []); // A lista de dependências está vazia, então isso só será executado uma vez ao montar o componente

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

  return (
    <div className='teacher--list'>
      <div className='list--header'>
        <h2>Pesquisas Abertas</h2>
        <select>
          <option value="portuguese">Português</option>
          <option value="english">Inglês</option>
        </select>
      </div>
      <div className='list--container'>
        {currentPesquisas.map((pesquisa) => (
          <div className='list' key={pesquisa._id}>
            <div className='teacher--detail'>
              <img src={pesquisa.image} alt={pesquisa.option} />
              <h2>{pesquisa.marca}</h2> {/* Aqui será o nome da marca */}
            </div>
            <span>{pesquisa.horario} hrs.</span> {/* Aqui será o horário */}
            <span>R$: {pesquisa.valor},00</span> {/* Aqui será o valor */}
            <span className='teacher--todo'>:</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '100px', marginLeft: '70px' }}>
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

export default TeacherList;
