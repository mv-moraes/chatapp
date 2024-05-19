import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Recupera o token do armazenamento local
    setAuthToken(token); // Define o token recuperado no estado authToken
  }, []);

  return authToken; // Retorna o token de autenticação
};

export default useAuth;
