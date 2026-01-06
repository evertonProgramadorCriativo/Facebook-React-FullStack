import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Mostra loading enquanto verifica autenticação
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
          Carregando...
        </p>
      </div>
    );
  }

  // Se não está autenticado, redireciona para login
  //if (!user) {
    //return <Navigate to="/login" replace />;
  //}

  // Se está autenticado, renderiza o componente filho
  return children;
};

export default ProtectedRoute;