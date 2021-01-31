import React, { useEffect, useState } from 'react';

import server from '../../services/server';
import { Container, GifsContainer } from './styles';
import Header from '../../components/Header';

interface Gif {
  id: string;
  url: string;
}

const Favorites: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  useEffect(() => {
    async function loading() {
      const results = await server.get('/gifs');
      setGifs(results.data);
    }
    loading();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <GifsContainer>
          {gifs.map((gif: Gif) => (
            <li key={gif.id}>
              <img className="gif" src={gif.url} alt="" />
            </li>
          ))}
        </GifsContainer>
      </Container>
    </>
  );
};

export default Favorites;
