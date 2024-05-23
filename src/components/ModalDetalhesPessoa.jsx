import React, { useState, useEffect } from 'react';
import { Modal, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& input': {
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: '#fff'
          },
        },
      },
    },
  },
});

const ModalDetalhesPessoa = ({ pessoa, onClose }) => {
  const [pesquisaSelecionada, setPesquisaSelecionada] = useState('');
  const [pesquisas, setPesquisas] = useState([]);
  const [pesquisasParticipantes, setPesquisasParticipantes] = useState([]);

  // Função para buscar as pesquisas participantes
  const fetchPesquisasParticipantes = () => {
    if (pessoa && pessoa._id) {
      fetch(`https://pesquisapp.com.br:5500/api/pesquisaParticipantes/${pessoa._id}`)
        .then(response => response.json())
        .then(data => {
          console.log(data); // Verificar os dados recebidos
          setPesquisasParticipantes(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  };

  useEffect(() => {
    // Buscar pesquisas participantes quando a pessoa mudar
    fetchPesquisasParticipantes();
  }, [pessoa]);

  useEffect(() => {
    // Buscar todas as pesquisas disponíveis
    fetch('https://pesquisapp.com.br:5500/api/pesquisas')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar os dados recebidos
        setPesquisas(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Atribuir pesquisa
  const handleAtribuirPesquisa = () => {
    if (pesquisaSelecionada) {
      const selectedPesquisa = pesquisas.find(pesquisa => pesquisa._id === pesquisaSelecionada);
      
      if (selectedPesquisa) {
        fetch('https://pesquisapp.com.br:5500/api/pesquisaParticipantes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pessoaId: pessoa._id,
            pesquisaId: selectedPesquisa._id,
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data.message); // Adicionado para verificar a mensagem do backend
          
          // Atualizar a lista de pesquisas participantes após adicionar uma pesquisa
          setPesquisasParticipantes(prevPesquisasParticipantes => [...prevPesquisasParticipantes, data]);
          
          setPesquisaSelecionada('');
          
          // Buscar novamente as pesquisas participantes após a atribuição
          fetchPesquisasParticipantes();
        })
        .catch(error => console.error('Error creating research participant:', error));
      }
    }
  };
  
  const handleSelectChange = (event) => {
    const pesquisaId = event.target.value;
    setPesquisaSelecionada(pesquisaId);
  };
  
  return (
    <Modal open={true} onClose={onClose}>
      <div className='modal-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='modal' style={{ width: '50%', maxWidth: '600px' }}>
          <div className='modal-content' style={{ padding: '20px' }}>
            <ThemeProvider theme={theme}>
              <div className="form-container">
                <div className='modal-header'>
                </div>
                <div className='modal-close'>
                <p className='close' onClick={() => onClose()}>&times;</p>
                </div>
                <div className="info">
  <h2 className='info-header'>{pessoa && pessoa.nomeCompleto}</h2>
</div>

  <div className="info-container">
  <p>CPF: {pessoa && pessoa.cpf}</p>
  <p>Telefone: {pessoa && pessoa.telefone}</p>
  <p>RG: {pessoa && pessoa.rg}</p>
  <p>Email: {pessoa && pessoa.email}</p>
  <p>Nome da Mãe: {pessoa && pessoa.mae}</p>
  <p>Data de Nascimento: {pessoa && new Date(pessoa.dataNascimento).toLocaleDateString('pt-BR')}</p>
  <p>Chave PIX: {pessoa && pessoa.pix}</p>
</div>

                <FormControl fullWidth style={{ width: '80%', marginTop: '30px', marginBottom: '20px' }}>
  <InputLabel id="pesquisa-label">Selecione uma pesquisa em aberto</InputLabel>
  <Select
    className='select-background'
    labelId="pesquisa-label"
    id="pesquisa-select"
    value={pesquisaSelecionada}
    onChange={handleSelectChange}
    MenuProps={{
      PaperProps: {
        style: {
          maxHeight: 180, // Define a altura máxima do menu
        },
      },
    }}
  >
    <MenuItem value="">Selecione uma pesquisa</MenuItem>
    {pesquisas.map((pesquisa) => (
      <MenuItem key={pesquisa._id} value={pesquisa._id}>
        {`${pesquisa.marca} - ${pesquisa.grupo} - ${new Date(pesquisa.data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}`}
      </MenuItem>
    ))}
  </Select>
</FormControl>



                <Button onClick={handleAtribuirPesquisa} style={{ marginTop: '5px', marginBottom: '20px' }}>Atribuir Pesquisa</Button>

                <div className='pesquisas-atribuidas-container'>
                  <div style={{ marginBottom: '20px' }}>
                  <h3>Pesquisas Participantes</h3>
                  </div>
                  <ul>
                  <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
  <ul>
  {pesquisasParticipantes.map((item) => (
  <li key={item._id} className="pesquisa-atribuida"> 
    <div className="pesquisa-atribuida-content">
      <strong>Marca:</strong> {item.pesquisa ? item.pesquisa.marca : 'Indefinida'}<br />
      <strong>Grupo:</strong> {item.pesquisa ? item.pesquisa.grupo : 'Indefinido'}<br />
      <strong>Classe:</strong> {item.pesquisa ? item.pesquisa.classe : 'Indefinida'}<br />
      <strong>Data:</strong> {item.pesquisa && item.pesquisa.data ? new Date(item.pesquisa.data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : 'Indefinida'}
    </div>
  </li>
))}

  </ul>
</div>

                  </ul>
                </div>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetalhesPessoa;
