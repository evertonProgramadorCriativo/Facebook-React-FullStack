import React from 'react';
import './Feed.css';
import CreatePost from '../Post/CreatePost';
import Post from '../Post/Post';

const Feed = ({ user, posts }) => {
  return (
    <div className="feed">
      {/* Componente para criar novo post */}
      <CreatePost user={user} />
      
      {/* Lista de posts */}
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Post key={index} {...post} />
        ))
      ) : (
        <div className="empty-state">
          <h3>Nenhuma publicação ainda</h3>
          <p>Seja o primeiro a publicar algo!</p>
        </div>
      )}
    </div>
  );
};

export default Feed;