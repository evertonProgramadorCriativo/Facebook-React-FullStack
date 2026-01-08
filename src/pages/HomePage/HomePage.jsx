import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Widgets from '../../components/Widgets/Widgets';

const HomePage = () => {
  const { user } = useAuth();

  // Posts de exemplo
  const posts = [
    {
      author: 'João Silva',
      time: 'há 2 horas',
      content: 'EUA divulgam VÍDEO de navio da Guarda Costeira emparelhando com petroleiro Marinera',
      likes: 124,
      comments: 15,
      shares: 3,
      hasImage: true
    },
    {
      author: 'Maria Santos',
      time: 'há 5 horas',
      content: 'Bom dia! Começando o dia com muito código e café #DevLife #React',
      likes: 89,
      comments: 8,
      shares: 1,
      hasImage: false
    },
    {
      author: user?.name || 'Você',
      time: 'há 1 hora',
      content: 'Caso Master: ao acolher pedido do BC, relator no TCU deixou clara sua insatisfação',
      likes: 45,
      comments: 3,
      shares: 1,
      hasImage: true
    },
    {
      author: 'Pedro Costa',
      time: 'há 8 horas',
      content: 'Anvisa identifica risco e retira de circulação molho de tomate com pedaços de vidro ',
      likes: 203,
      comments: 32,
      shares: 15,
      hasImage: false
    }
  ];

  return (
    <>
      <Header />
      <div className="main-container">
        <Sidebar />
        <Feed user={user} posts={posts} />
        <Widgets />
      </div>
    </>
  );
};

export default HomePage;