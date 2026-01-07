import React from 'react';
import { UsersRound, FileText } from 'lucide-react';
import './Widgets.css';

const Widgets = () => {
  const contacts = [
    'Ana Silva',
    'Carlos Santos',
    'Maria Oliveira',
    'João Costa',
    'Pedro Lima',
    'Juliana Souza',
    'Rafael Alves',
    'Beatriz Costa',
    'Lucas Martins',
    'Camila Ferreira',
    'Bruno Silva',
    'Fernanda Lima'
  ];

  const suggestions = [
    { name: 'Desenvolvedores React', type: 'Grupo', members: '12K membros' },
    { name: 'Fotografia Digital', type: 'Grupo', members: '8.5K membros' },
    { name: 'Tech News BR', type: 'Página', followers: '45K seguidores' }
  ];

  return (
    <aside className="widgets">
      {/* Seção de Contatos */}
      <div className="widgets-section">
        <h3>Contatos</h3>
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <div className="contact-avatar">
              {contact.charAt(0)}
            </div>
            <span className="contact-name">{contact}</span>
          </div>
        ))}
      </div>

      {/* Seção de Sugestões */}
      <div className="widgets-section">
        <div className="widgets-header">
          <h3>Sugestões</h3>
          <a href="#" className="widgets-link">Ver todas</a>
        </div>
        {suggestions.map((item, index) => (
          <div key={index} className="suggestion-item">
            <div className="suggestion-image">
              {item.type === 'Grupo' ? (
                <UsersRound size={24} />
              ) : (
                <FileText size={24} />
              )}
            </div>
            <div className="suggestion-info">
              <h4>{item.name}</h4>
              <p>{item.members || item.followers}</p>
              <button className="suggestion-btn">
                {item.type === 'Grupo' ? 'Participar' : 'Curtir'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Widgets;