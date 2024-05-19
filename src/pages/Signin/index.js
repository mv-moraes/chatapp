import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Container, TextField, Box, Typography, ThemeProvider, InputAdornment } from '@mui/material';
import theme from '../../styles/globaltheme';
import { FaUser, FaLock } from "react-icons/fa";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(false);
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUserId(decodedToken.userId);
      console.log('Usuário está logado com o ID:', decodedToken.userId);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.0.109:5500/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('_id', data._id); // Armazene o _id do usuário no localStorage
        setLoggedIn(true);
      } else {
        setError("Credenciais inválidas");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } catch (error) {
      setError('Ocorreu um erro ao tentar fazer login.');
    }
  };
  

  const handleKeyPress = (event) => {
    if(event.key === 'Enter') {
      handleLogin();
    }
  };

  if (loggedIn) {
    navigate("/home");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            padding: '20px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          <Typography variant="h5" align="center" gutterBottom fontWeight="bold" sx={{ marginBottom: '20px', marginTop: '10px' }}>
            Login de Usuário
          </Typography>
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ marginRight: '15px' }}>
                  <FaUser className='iconUser' />
                </InputAdornment>
              ),
              sx: {
                bgcolor: '#f0f2f5',
                borderRadius: 10,
                width: '100%',
                fontSize: '20px',
                padding: '0px',
                height: '50px',
                '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#000000' },
              }
            }}
            id="outlined-basic"
            label="Nome de Usuário"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ marginRight: '15px' }}>
                  <FaLock className='iconPass'/>
                </InputAdornment>
              ),
              sx: {
                bgcolor: '#f0f2f5',
                borderRadius: 10,
                width: '100%',
                fontSize: '20px',
                padding: '0px',
                height: '50px',
              }
            }}
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '25px', marginTop: '20px', width: '87%', padding: '12px' }}
            onClick={handleLogin}
          >
            Entrar
          </Button>
          {error && <Typography variant="body2" color="error">{error}</Typography>}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Signin;
