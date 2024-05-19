import React, { useState, useEffect } from 'react';
import TeacherList from './TeacherList';

const PesquisasPage = () => {
  const [pesquisas, setPesquisas] = useState([]);

  useEffect(() => {
    // Faça uma solicitação fetch para sua API para buscar as informações das pesquisas
    fetch('/api/pesquisas')
      .then(response => response.json())
      .then(data => {
        setPesquisas(data); // Define as pesquisas no estado após o recebimento dos dados
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <TeacherList pesquisas={pesquisas} />
    </div>
  );
}

export default PesquisasPage;
