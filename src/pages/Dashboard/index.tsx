/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { CgDetailsMore } from 'react-icons/cg';
import { Container, Form, GifsContainer } from './styles';

import api from '../../services/api';
import server from '../../services/server';

import Header from '../../components/Header';

interface Gif {
  title: string;
  id: string;
  url: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

interface Data {
  url: string;
}

const Dashboard: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState('');

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

  async function handleFavorites(event: FormEvent) {
    event.preventDefault();
    const data = {
      url: favorites,
    };
    const response = await server.post('gifs', data);
    console.log(favorites);
  }

  return (
    <>
      <Header />
      <Container>
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
              <Link to="/">
                <img className="gif" src={gif.images.fixed_height.url} alt="" />
              </Link>
              <div>
                <button
                  type="submit"
                  value={gif.images.fixed_height.url}
                  onClickCapture={e => setFavorites(e.currentTarget.value)}
                  onClick={handleFavorites}
                >
                  <MdFavorite size={22} />
                </button>
                <button type="submit">
                  <CgDetailsMore size={22} />
                </button>
              </div>
            </li>
          ))}
        </GifsContainer>
      </Container>
    </>
  );
};

export default Dashboard;
