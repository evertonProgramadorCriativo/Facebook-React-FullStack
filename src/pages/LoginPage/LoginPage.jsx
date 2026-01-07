import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, user } = useAuth();

  // Se já está logado, redireciona para home
  useEffect(() => {
    //if (user) {
   //   navigate('/', { replace: true });
    //}
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validação básica
    if (!email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    // Valida email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, digite um email válido');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    // Faz o login
    const userData = {
      email: email,
      password: password // Não salvar senha em produção!
    };

    const success = login(userData);
    
    if (success) {
      navigate('/', { replace: true });
    } else {
      setError('Erro ao fazer login. Tente novamente.');
    }
  };

  // Função para login rápido (demo)
  const handleQuickLogin = () => {
    const demoUser = {
      name: 'Usuário Demo',
      email: 'demo@facebook.com'
    };
    
    if (login(demoUser)) {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <h1 className="login-logo">facebook</h1>
          <p className="login-tagline">
            O Facebook ajuda você a se conectar e compartilhar com as pessoas 
            que fazem parte da sua vida.
          </p>
        </div>
        
        <div className="login-right">
          <form className="login-form" onSubmit={handleSubmit}>
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            <input 
              type="email" 
              placeholder="Email ou telefone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            
            <input 
              type="password" 
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            
            <button type="submit" className="login-btn">
              Entrar
            </button>
            
            <a href="#" className="forgot-password">
              Esqueceu a senha?
            </a>
            
            <div className="divider"></div>
            
            <button 
              type="button" 
              className="create-account-btn"
              onClick={handleQuickLogin}
            >
              Login Rápido
            </button>
          </form>
          
          <p className="create-page">
            <strong>Criar uma Página</strong> para uma celebridade, marca ou empresa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;