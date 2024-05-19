import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <ThemeProvider theme={{ /* Seu tema, se necessário */ }}>
      <AuthProvider>
        <RoutesApp />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
