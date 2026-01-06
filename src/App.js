import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import './App.css';

// Context
import { AuthProvider } from './context/AuthContext';

// Components
import ProtectedRoute from './routes/ProtectedRoute';

// Pages
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <Routes>
            {/* Rota Pública - Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Rota Protegida - Home (temporária) */}
            <Route path="/" element={
              <ProtectedRoute>
                <div style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'var(--text-primary)'
                }}>
                  <h1> Facebook React Js </h1>
                  <p>HomePage será criada </p>
                  <p>http://localhost:3000/login Pagína de Loginho</p>
                </div>
              </ProtectedRoute>
            } />

            {/* Rota padrão - redireciona para home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;