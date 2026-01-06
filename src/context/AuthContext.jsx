import React, { createContext, useState, useEffect, useContext } from 'react';

// Cria o contexto de autenticação
const AuthContext = createContext();

// Hook customizado para usar o contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

// Provider do contexto de autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carrega o usuário do localStorage quando o app inicia
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('facebook_user');
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
        localStorage.removeItem('facebook_user');
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Função de login
  const login = (userData) => {
    try {
      // Extrai o nome do email se não foi fornecido
      const name = userData.name || userData.email.split('@')[0];
      
      const userToSave = {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email: userData.email,
        loginDate: new Date().toISOString()
      };
      
      setUser(userToSave);
      localStorage.setItem('facebook_user', JSON.stringify(userToSave));
      return true;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('facebook_user');
  };

  // Função para atualizar dados do usuário
  const updateUser = (newData) => {
    try {
      const updatedUser = { ...user, ...newData };
      setUser(updatedUser);
      localStorage.setItem('facebook_user', JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      return false;
    }
  };

  // Valor que será disponibilizado para os componentes
  const value = {
    user,
    loading,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};