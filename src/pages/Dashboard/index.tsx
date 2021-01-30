/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, GifsContainer } from './styles';

import api from '../../services/api';
import Header from '../../components/Header';

interface Gif {
  id: string;
  title: string;
  slug: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const Dashboard: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [search, setSearch] = useState('');

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      const results = await api.get('/v1/gifs/search', {
        params: {
          api_key: 'crCvOcvLJWQMQJJyZEEZJdl21spihQXe',
          q: `${search}`,
        },
      });
      setGifs(results.data.data);
      console.log(results.data.data);
    } catch (err) {
      console.log('error');
    }
  }

  function teste() {
    <p>ola</p>;
  }
  return (
    <Container>
      <Header />
      <Form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Pesquise um tema"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <GifsContainer>
        {gifs.map((gif: Gif) => (
          <li key={gif.id}>
            <Link to={`/media/${gif.images.fixed_height.url}`}>
              <img className="gif" src={gif.images.fixed_height.url} alt="" />
            </Link>
          </li>
        ))}
      </GifsContainer>
    </Container>
  );
};

export default Dashboard;
