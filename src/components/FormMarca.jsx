import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FormCadastroMarcas = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    marca: '',
    imagem: null,
    site: ''
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    // Aqui você pode adicionar lógica para lidar com a imagem selecionada
    const imageFile = e.target.files[0];
    setFormData({
      ...formData,
      imagem: imageFile
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor
    onSubmit(formData);
    // Fechar o modal após o envio bem-sucedido
    onClose();
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
    <label>
                    Marca:
                    
                  </label>
      <TextField
        fullWidth
        name="marca"
        value={formData.marca}
        onChange={handleChange}
        margin="normal"
        required
        className="input-field"
      />
      </div>
      <div className="col">
      <label>
                    Link Para o Site:
                    
                  </label>
                  
      <TextField
        fullWidth
        name="site"
        value={formData.site}
        onChange={handleChange}
        margin="normal"
        className="input-field"
      />
      </div>
      </div>
      <div className="row">
                <div className="col">
      <input
        type="file"
        accept="image/png"
        onChange={handleImageChange}
        style={{ margin: '20px 0' }}
        className="input-file"
      />
      </div>
      </div>
      <Button type="submit" >
        Cadastrar Marca
      </Button>
      
    </form>
    </ThemeProvider>
    </div>
    </div>
    </div>
  );
};

export default FormCadastroMarcas;
