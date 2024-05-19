// Home.js
import React, { useContext } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../../styles/globaltheme'; // Importando o tema personalizado
import '../../styles/global';
import Sidebar from '../../components/Sidebar';
import Profile from '../../components/Profile';
import { AuthContext } from '../../contexts/auth'; // Importa o contexto de autenticação

const Home = ({ content, pesquisa, marcas, pessoas, report }) => {
  const { user } = useContext(AuthContext); // Obtém o usuário do contexto de autenticação
  console.log("User from AuthContext in Home:", user); // Adiciona um log do usuário do contexto de autenticação

  return (
    <div className='dashboard'>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <div className="dashboard--content">
          {content}
          {pesquisa}
          {marcas}
          {pessoas}
          {report}
          <Profile />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Home;
