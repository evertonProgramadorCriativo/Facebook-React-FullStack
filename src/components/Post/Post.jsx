import React, { useState } from 'react';
import { 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Globe, 
  MoreHorizontal, 
  Image 
} from 'lucide-react';
import './Post.css';

const Post = ({ author, time, content, likes, comments, shares, hasImage }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes || 0);
  const [commentCount] = useState(comments || 0);
  const [shareCount, setShareCount] = useState(shares || 0);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const handleComment = () => {
    alert('Funcionalidade de comentários em desenvolvimento');
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
    alert('Post compartilhado!');
  };

  return (
    <div className="post fade-in">
      {/* Header do Post */}
      <div className="post-header">
        <div className="post-author">
          <div className="user-avatar">
            {author?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="post-info">
            <h3>{author || 'Usuário'}</h3>
            <span className="post-time">
              <Globe size={14} /> {time || 'agora'}
            </span>
          </div>
        </div>
        <button className="post-menu" aria-label="Mais opções">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Conteúdo do Post */}
      <div className="post-content">
        {content || 'Post sem conteúdo'}
      </div>

      {/* Imagem (se houver) */}
      {hasImage && (
        <div className="post-image">
          <div className="post-image-placeholder">
            <Image size={48} />
            <span>Imagem do Post</span>
          </div>
        </div>
      )}

      {/* Estatísticas */}
      {(likeCount > 0 || commentCount > 0 || shareCount > 0) && (
        <div className="post-stats">
          <div className="post-stats-left">
            {likeCount > 0 && (
              <>
                <ThumbsUp size={16} fill={liked ? 'currentColor' : 'none'} />
                <span>{likeCount}</span>
              </>
            )}
          </div>
          <div className="post-stats-right">
            {commentCount > 0 && (
              <span>{commentCount} comentário{commentCount !== 1 ? 's' : ''}</span>
            )}
            {shareCount > 0 && (
              <span>{shareCount} compartilhamento{shareCount !== 1 ? 's' : ''}</span>
            )}
          </div>
        </div>
      )}

      {/* Ações do Post */}
      <div className="post-actions">
        <button 
          className={`post-action-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <ThumbsUp size={18} fill={liked ? 'currentColor' : 'none'} />
          Curtir
        </button>
        <button className="post-action-btn" onClick={handleComment}>
          <MessageCircle size={18} />
          Comentar
        </button>
        <button className="post-action-btn" onClick={handleShare}>
          <Share2 size={18} />
          Compartilhar
        </button>
      </div>
    </div>
  );
};

export default Post;