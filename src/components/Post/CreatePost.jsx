import React, { useState } from 'react';
import { Video, Image, Smile } from 'lucide-react';
import './Post.css';

const CreatePost = ({ user }) => {
  const [postText, setPostText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePost = () => {
    if (postText.trim()) {
     
      alert('Post criado: ' + postText);
      setPostText('');
      setIsExpanded(false);
    }
  };

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handlePost();
    }
  };

  return (
    <div className="create-post">
      <div className="create-post-input">
        <div className="user-avatar">
          {user?.name?.charAt(0).toUpperCase() || 'U'}
        </div>
        <input
          type="text"
          placeholder={`No que você está pensando, ${user?.name || 'Usuário'}?`}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          onClick={handleInputClick}
          onKeyPress={handleKeyPress}
        />
      </div>

      <div className="create-post-divider"></div>

      <div className="create-post-actions">
        <button className="post-action-btn">
          <Video size={20} className="post-action-icon" />
          Vídeo ao vivo
        </button>
        <button className="post-action-btn">
          <Image size={20} className="post-action-icon" />
          Foto/vídeo
        </button>
        <button className="post-action-btn">
          <Smile size={20} className="post-action-icon" />
          Sentimento
        </button>
      </div>
    </div>
  );
};

export default CreatePost;