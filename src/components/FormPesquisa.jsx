import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';


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

const FormPesquisa = ({ onSubmit, onClose }) => {
  const userId = useAuth();

  const [formData, setFormData] = useState({
    userId: localStorage._id,
    marca: '',
    valor: '',
    data: '',
    horario: '',
    grupo: '',
    vagas: '',
    ramo: '',
    classe: '',
    situacao: ''
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
      const response = await fetch('http://192.168.0.109:5500/api/pesquisas', {
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
      const data = await response.json();
      setFeedbackMessage('Pesquisa cadastrada com sucesso!');
      onSubmit(data);
    } catch (error) {
      console.error('Error submitting data:', error);
      setFeedbackMessage('Ocorreu um erro ao cadastrar a pesquisa. Por favor, tente novamente.');
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
            <form className="form-container" onSubmit={handleSubmit}>
              
              <div className='modal-close'>
                <p className='close' onClick={() => onClose()}>&times;</p>
                </div>
                <div className='modal-header'>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    Marca:
                    <input type="text" name="marca" value={formData.marca} onChange={handleChange} />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Ramo:
                    <select name="ramo" value={formData.ramo} onChange={handleChange}>
                      <option value="">Selecione o Ramo</option>
                      <option value="Ramo 1">Tecnologia</option>
                      <option value="Ramo 2">Saúde/Estética</option>
                      <option value="Ramo 3">Alimentação</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    Data:
                    
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Selecione a Data"
    value={formData.data}
    format="DD - MM - YYYY"
    onChange={(newValue) => setFormData({ ...formData, data: newValue })}
    renderInput={(params) => <input {...params} />} />
      </DemoContainer>
    </LocalizationProvider>
                </div>
                <div className="col">
                  <label>
                    Horário:
                    <input type="text" name="horario" value={formData.horario} onChange={handleChange} />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    Grupo:
                    <input type="text" name="grupo" value={formData.grupo} onChange={handleChange} />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Vagas:
                    <input type="number" name="vagas" value={formData.vagas} onChange={handleChange} />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>
                    Classe:
                    <select name="classe" value={formData.classe} onChange={handleChange}>
                      <option value="">Selecione a Classe</option>
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B1">B1</option>
                      <option value="B2">B2</option>
                      <option value="C1">C1</option>
                      <option value="C2">C2</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                  </label>
                </div>
                <div className="col">
                  <label>
                    Valor:
                    <input
                      type="text"
                      name="valor"
                      value={formData.valor}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Situação:
                    <select name="situacao" value={formData.situacao} onChange={handleChange}>
                      <option value="">Selecione a Situação</option>
                      <option value="Aberto">Aberto</option>
                      <option value="Fechado">Fechado</option>
                      <option value="Em espera">Em espera</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="feedback-message">{feedbackMessage}</div>
              <button type="submit">Cadastrar Pesquisa</button>
            </form >
          </ThemeProvider>
        </div>
        <div className='modal-footer'></div>
      </div>
    </div>
  );
};

export default FormPesquisa;
