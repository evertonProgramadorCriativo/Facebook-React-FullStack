import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  User, 
  Users, 
  UsersRound, 
  ShoppingBag, 
  Video,
  Clock,
  Bookmark,
  FileText,
  Calendar,
  History
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [
    { name: user?.name || 'Meu Perfil', link: '/profile', icon: User },
    { name: 'Amigos', link: '/friends', icon: Users },
    { name: 'Grupos', link: '/groups', icon: UsersRound },
    { name: 'Marketplace', link: '/marketplace', icon: ShoppingBag },
    { name: 'Watch', link: '/watch', icon: Video },
  ];

  const shortcuts = [
    { name: 'Memórias', link: '/memories', icon: Clock },
    { name: 'Salvos', link: '/saved', icon: Bookmark },
    { name: 'Páginas', link: '/pages', icon: FileText },
    { name: 'Eventos', link: '/events', icon: Calendar },
    { name: 'Mais recentes', link: '/recent', icon: History },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        {/* Menu Principal */}
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link 
              key={index} 
              to={item.link} 
              className={`sidebar-item ${isActive(item.link)}`}
            >
              <span className="sidebar-icon">
                <IconComponent size={20} />
              </span>
              <span className="sidebar-text">{item.name}</span>
            </Link>
          );
        })}
        
        <div className="sidebar-divider"></div>
        
        {/* Atalhos */}
        <div className="sidebar-section-title">Atalhos</div>
        {shortcuts.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Link 
              key={index} 
              to={item.link} 
              className={`sidebar-item ${isActive(item.link)}`}
            >
              <span className="sidebar-icon">
                <IconComponent size={20} />
              </span>
              <span className="sidebar-text">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;