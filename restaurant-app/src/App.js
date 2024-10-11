import React, { useState } from 'react';
import './App.css';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';  // Componente de Login
import DashBoard from './Components/DashBoard/DashBoard';      // Componente do Dashboard

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para alternar entre login e dashboard

  const handleLogin = () => {
    setIsLoggedIn(true); // Ao clicar em Login, atualiza o estado para exibir o Dashboard
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <DashBoard />  // Exibe o Dashboard se o usuário estiver logado
      ) : (
        <LoginSignUp onLogin={handleLogin} />  // Exibe a página de login
      )}
    </div>
  );
}

export default App;
