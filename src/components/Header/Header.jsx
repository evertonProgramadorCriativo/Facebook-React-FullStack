import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Home, 
  Video, 
  ShoppingBag, 
  Users,
  Menu,
  MessageCircle,
  Bell,
  User,
  LogOut,
  Search
} from 'lucide-react';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      {/* Seção Esquerda */}
      <div className="header-left">
        <Link to="/" className="logo">
          facebook
        </Link>
        <div className="search-bar">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Pesquisar no Facebook" 
            aria-label="Pesquisar"
          />
        </div>
      </div>
      
      {/* Seção Central - Navegação */}
      <nav className="header-center">
        <Link to="/" className={`nav-btn ${isActive('/')}`}>
          <Home size={24} />
          <span className="nav-text">Home</span>
        </Link>
        <Link to="/watch" className={`nav-btn ${isActive('/watch')}`}>
          <Video size={24} />
          <span className="nav-text">Watch</span>
        </Link>
        <Link to="/marketplace" className={`nav-btn ${isActive('/marketplace')}`}>
          <ShoppingBag size={24} />
          <span className="nav-text">Marketplace</span>
        </Link>
        <Link to="/groups" className={`nav-btn ${isActive('/groups')}`}>
          <Users size={24} />
          <span className="nav-text">Grupos</span>
        </Link>
      </nav>
      
      {/* Seção Direita */}
      <div className="header-right">
        <button className="icon-btn" aria-label="Menu">
          <Menu size={20} />
        </button>
        <button className="icon-btn" aria-label="Messenger">
          <MessageCircle size={20} />
        </button>
        <button className="icon-btn" aria-label="Notificações">
          <Bell size={20} />
        </button>
        
        {/* Avatar com Menu Dropdown */}
        <div className="profile-menu-container">
          <Link 
            to="/profile" 
            className="profile-btn"
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
            aria-label="Perfil"
          >
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </Link>
          
          {showMenu && (
            <div 
              className="profile-menu"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <Link to="/profile" className="profile-menu-item">
                <User size={18} />
                Ver Perfil
              </Link>
              <div className="profile-menu-divider"></div>
              <div className="profile-menu-item" onClick={handleLogout}>
                <LogOut size={18} />
                Sair
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;