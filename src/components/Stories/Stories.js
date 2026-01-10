import React, { useRef } from 'react';
import './Stories.css';

const Stories = ({ user }) => {
  const storiesRef = useRef(null);

  const stories = [
    { name: 'Ana Silva', initial: 'A' },
    { name: 'Carlos Santos', initial: 'C' },
    { name: 'Maria Oliveira', initial: 'M' },
    { name: 'João Costa', initial: 'J' },
    { name: 'Pedro Lima', initial: 'P' },
    { name: 'Juliana Souza', initial: 'J' },
    { name: 'Rafael Alves', initial: 'R' },
    { name: 'Beatriz Costa', initial: 'B' }
  ];

  const handleStoryClick = (name) => {
    alert(`Abrindo story de ${name}`);
  };

  return (
    <div className="stories-container">
      <div className="stories-wrapper" ref={storiesRef}>
        {/* Card para criar story */}
        <div 
          className="story-card create-story"
          onClick={() => alert('Criar story')}
        >
          <div className="create-story-icon">+</div>
          <span className="create-story-text">Criar story</span>
        </div>

        {/* Stories dos usuários */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="story-card user-story"
            onClick={() => handleStoryClick(story.name)}
          >
            <div className="story-avatar">{story.initial}</div>
            <span className="story-author">{story.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;