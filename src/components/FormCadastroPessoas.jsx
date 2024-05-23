import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

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

const FormCadastroPessoas = ({ onSubmit, onClose }) => {
  const userId = useAuth();

  const [formData, setFormData] = useState({
    nomeCompleto: '',
    cpf: '',
    telefone: '',
    rg: '',
    email: '',
    nomeMae: '', // Removido o campo obrigatório
    dataNascimento: '',
    chavePix: '' // Removido o campo obrigatório
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Dados a serem enviados:', formData);

      // Envie os dados para o servidor
      const response = await fetch('https://pesquisapp.com.br:5500/api/pessoas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userId}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      // Limpe o formulário após o envio bem-sucedido
      setFormData({
        nomeCompleto: '',
        cpf: '',
        telefone: '',
        rg: '',
        email: '',
        nomeMae: '',
        dataNascimento: '',
        chavePix: ''
      });

      setFeedbackMessage('Cadastro de pessoa realizado com sucesso!');
      onSubmit();
    } catch (error) {
      console.error('Error submitting data:', error);
      setFeedbackMessage('Ocorreu um erro ao cadastrar a pessoa. Por favor, tente novamente.');
    }
    setTimeout(() => {
      setFeedbackMessage('');
    }, 5000);
  };

  return (
    <div className='modal-container'>
      <div className='modal'>
        <div className='modal-content'>
          <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit} className="form-container">
              <div className='modal-close'>
                <p className='close' onClick={() => onClose()}>&times;</p>
                </div>
                <div className='modal-header'>
              </div>
              <div className="row">
                <div className="col">
                  <label>Nome Completo:</label>
                  <TextField
                    fullWidth
                    name="nomeCompleto"
                    value={formData.nomeCompleto}
                    onChange={handleChange}
                    margin="normal"
                    required
                    className="input-field"
                  />
                </div>
                <div className="col">
                  <label>CPF:</label>
                  <TextField
                    fullWidth
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    margin="normal"
                    required
                    className="input-field"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Telefone:</label>
                  <TextField
                    fullWidth
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    margin="normal"
                    className="input-field"
                  />
                </div>
                <div className="col">
                  <label>RG:</label>
                  <TextField
                    fullWidth
                    name="rg"
                    value={formData.rg}
                    onChange={handleChange}
                    margin="normal"
                    required
                    className="input-field"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Email:</label>
                  <TextField
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    className="input-field"
                  />
                </div>
                <div className="col">
                  <label>Nome da Mãe:</label>
                  <TextField
                    fullWidth
                    name="nomeMae"
                    value={formData.nomeMae}
                    onChange={handleChange}
                    margin="normal"
                    className="input-field"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Data de Nascimento:</label>
                  <TextField
                    fullWidth
                    type="date"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    margin="normal"
                    className="input-field"
                  />
                </div>
                <div className="col">
                  <label>Chave PIX:</label>
                  <TextField
                    fullWidth
                    name="chavePix"
                    value={formData.chavePix}
                    onChange={handleChange}
                    margin="normal"
                    className="input-field"
                  />
                </div>
              </div>
              <Button type="submit">Cadastrar Pessoa</Button>
              <div className="feedback-message">{feedbackMessage}</div>
            </form>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default FormCadastroPessoas;
