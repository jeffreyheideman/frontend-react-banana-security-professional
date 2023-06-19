import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [isAuth, toggleIsAuth] = useState({
    isAuth: false,
    user: null,
  });
  const navigate = useNavigate();

  function login() {
    console.log('Gebruiker is ingelogd!');
    toggleIsAuth({
      ...isAuth,
      isAuth: true,
    });
    navigate('/profile');
  }

  function logout() {
    console.log('Gebruiker is uitgelogd!');
    toggleIsAuth({
      ...isAuth,
      isAuth: false
    });
    navigate('/');
  }

  const contextData = {
    isAuth: isAuth,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;